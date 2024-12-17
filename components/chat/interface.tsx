'use client';

import { Card } from '@/components/ui/card';
import { ReviewList } from './review-list';
import { ReviewForm } from './review-form';
import { ReviewDetail } from './review-detail';
import { useReviews } from '@/lib/hooks/use-reviews';

export function ChatInterface() {
  const {
    reviews,
    selectedReview,
    setSelectedReview,
    createReview,
    saveReview,
  } = useReviews();

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] gap-4">
      <div className="grid grid-cols-12 gap-4 flex-1">
        <div className="col-span-4">
          <ReviewList
            reviews={reviews}
            selectedReview={selectedReview}
            onSelectReview={setSelectedReview}
          />
        </div>
        <div className="col-span-8">
          <Card className="h-full p-4">
            {selectedReview ? (
              <ReviewDetail
                review={selectedReview}
                onSaveEdit={saveReview}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                レビューを選択してください
              </div>
            )}
          </Card>
        </div>
      </div>
      <div className="h-auto">
        <ReviewForm onSubmit={createReview} />
      </div>
    </div>
  );
}