// use-review.ts
"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import type { Review, ReviewFormData } from "@/lib/types/review";
import { generateAIResponse } from "@/lib/utils/ai-response";
// ここでapiのcreateReviewをimport
import { createReview as createReviewApi } from "@/lib/api/reviews";

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const { toast } = useToast();

  const createReview = async (data: ReviewFormData) => {
    try {
      // サーバーサイドへfetch
      const serverReview = await createReviewApi(data);
      // サーバーから返ってきたレビューに対してAI回答生成
      const aiResponse = await generateAIResponse(data.content, data.rating);
      const reviewWithResponse = {
        ...serverReview,
        aiResponse,
        editedResponse: aiResponse,
      };

      // ステート更新
      setReviews((prev) => [reviewWithResponse, ...prev]);
      setSelectedReview(reviewWithResponse);

      toast({
        title: "AI回答が生成されました",
        description: "回答を確認・編集してください",
      });

      return reviewWithResponse;
    } catch (error) {
      console.error("レビューの作成に失敗しました", error);
      toast({
        title: "エラー",
        description: "レビューの作成に失敗しました",
        variant: "destructive",
      });
    }
  };

  const saveReview = (
    review: Review,
    editedResponse: string,
    markAsCompleted: boolean = false
  ) => {
    const updatedReview = {
      ...review,
      editedResponse,
      status: markAsCompleted ? ("completed" as const) : review.status,
    };

    setReviews((prev) =>
      prev.map((r) => (r.id === review.id ? updatedReview : r))
    );
    setSelectedReview(updatedReview);

    toast({
      title: markAsCompleted ? "チェックが完了しました" : "回答を保存しました",
      description: markAsCompleted
        ? "チェック済みタブから確認できます"
        : "回答が更新されました",
    });
  };

  return {
    reviews,
    selectedReview,
    setSelectedReview,
    createReview,
    saveReview,
  };
}
