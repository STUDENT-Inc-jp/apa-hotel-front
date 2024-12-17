import type { Review, ReviewFormData } from '@/lib/types/review';
import { generateAIResponse } from './ai-service';
import { getCurrentDate } from '@/lib/utils/date';

export async function createReview(data: ReviewFormData): Promise<Review> {
  const aiResponse = await generateAIResponse(data.content, data.rating);
  
  return {
    id: `review-${Date.now()}`,
    content: data.content,
    rating: data.rating,
    date: getCurrentDate(),
    status: 'draft',
    respondentName: data.respondentName,
    aiResponse,
    editedResponse: aiResponse,
  };
}

export function updateReview(review: Review, editedResponse: string, markAsCompleted: boolean): Review {
  return {
    ...review,
    editedResponse,
    status: markAsCompleted ? 'completed' : review.status,
  };
}