'use client';

import { ChatHeader } from '@/components/chat/header';
import { ReviewForm } from '@/components/chat/review-form';
import { ReviewDetail } from '@/components/chat/review-detail';
import { useReviews } from '@/lib/hooks/use-reviews';

export default function ChatPage() {
  const { selectedReview, createReview, saveReview } = useReviews();

  return (
    <div className="space-y-6">
      <ChatHeader />
      <div className="space-y-6">
        <ReviewForm onSubmit={createReview} />
        {selectedReview && (
          <ReviewDetail
            review={selectedReview}
            onSaveEdit={saveReview}
          />
        )}
      </div>
    </div>
  );
}