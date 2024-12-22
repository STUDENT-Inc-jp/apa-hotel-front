"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { createReviewApi, updateReviewApi } from "@/lib/api/reviews"; 
import type { Review } from "@/lib/types/review";

/**
 * フロントエンド側でレビューの作成・更新などを管理するフック
 */
export function useReviews() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const { toast } = useToast();

  /**
   * 新規レビュー作成
   * ReviewFormから受け取った { content, rating, respondentName, hotelId } を利用
   */
  const createReview = async (data: {
    content: string;
    rating: number;
    respondentName: string;
    hotelId: string;
  }) => {
    try {
      const newReview = await createReviewApi(data);
      // 作成後、選択中のレビューをこれに設定して表示する
      setSelectedReview(newReview);
      toast({
        title: "レビュー作成成功",
        description: "AI回答を生成しました。",
      });
    } catch (err) {
      console.error("Failed to create review:", err);
      toast({
        title: "エラー",
        description: "レビュー作成に失敗しました。",
        variant: "destructive",
      });
    }
  };

  /**
   * レビュー更新 (AI回答の編集、チェック完了など)
   * @param review 既存のレビューオブジェクト
   * @param editedResponse ユーザーが編集した回答本文
   * @param markAsCompleted trueにするとstatusをcompletedに
   */
  const saveReview = async (
    review: Review,
    editedResponse: string,
    markAsCompleted: boolean
  ) => {
    try {
      const updated = await updateReviewApi({
        ...review,
        editedResponse,
        status: markAsCompleted ? "completed" : "draft",
      });
      setSelectedReview(updated);
      toast({
        title: "レビュー更新成功",
        description: markAsCompleted
          ? "レビューをチェック完了にしました。"
          : "レビューを更新しました。",
      });
    } catch (err) {
      console.error("Failed to update review:", err);
      toast({
        title: "エラー",
        description: "レビューの更新に失敗しました。",
        variant: "destructive",
      });
    }
  };

  return {
    selectedReview,
    createReview,
    saveReview,
  };
}
