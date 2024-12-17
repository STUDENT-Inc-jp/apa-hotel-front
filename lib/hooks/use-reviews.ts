'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { Review, ReviewFormData } from '@/lib/types/review';
import { generateAIResponse } from '@/lib/utils/ai-response';
import { sampleReviews } from '@/lib/constants/sample-data';

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const { toast } = useToast();

  const createReview = async (data: ReviewFormData) => {
    const newReview: Review = {
      id: `review-${Date.now()}`,
      content: data.content,
      rating: data.rating,
      date: new Date().toISOString().split('T')[0],
      status: 'draft',
      respondentName: data.respondentName,
    };

    const aiResponse = await generateAIResponse(data.content, data.rating);
    const reviewWithResponse = {
      ...newReview,
      aiResponse,
      editedResponse: aiResponse,
    };

    setReviews(prev => [reviewWithResponse, ...prev]);
    setSelectedReview(reviewWithResponse);
    
    toast({
      title: 'AI回答が生成されました',
      description: '回答を確認・編集してください',
    });

    return reviewWithResponse;
  };

  const saveReview = (review: Review, editedResponse: string, markAsCompleted: boolean = false) => {
    const updatedReview = {
      ...review,
      editedResponse,
      status: markAsCompleted ? 'completed' as const : review.status,
    };

    setReviews(prev => prev.map(r => 
      r.id === review.id ? updatedReview : r
    ));
    setSelectedReview(updatedReview);

    toast({
      title: markAsCompleted ? 'チェックが完了しました' : '回答を保存しました',
      description: markAsCompleted ? 'チェック済みタブから確認できます' : '回答が更新されました',
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