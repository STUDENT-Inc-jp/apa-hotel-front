'use client';
export const dynamic = 'force-dynamic';

import { ReviewList } from '@/components/chat/review-list';
import { ReviewDetail } from '@/components/chat/review-detail';
import { useReviews } from '@/lib/hooks/use-reviews';

export default function HistoryPage() {
  // 同様にガード処理を追加
  const {
    reviews: rawReviews,
    selectedReview,
    setSelectedReview,
    saveReview,
  } = useReviews() || {
    reviews: [],
    selectedReview: null,
    setSelectedReview: () => {},
    saveReview: () => {},
  };

  // reviews が配列かどうかチェック
  const reviews = Array.isArray(rawReviews) ? rawReviews : [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">出力履歴</h2>
        <p className="text-muted-foreground">
          生成されたAI回答の履歴を確認できます
        </p>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <ReviewList
            reviews={reviews}
            selectedReview={selectedReview}
            onSelectReview={setSelectedReview}
          />
        </div>
        <div className="col-span-8">
          {selectedReview ? (
            <ReviewDetail
              review={selectedReview}
              onSaveEdit={saveReview}
            />
          ) : (
            <div className="h-[calc(100vh-16rem)] flex items-center justify-center text-muted-foreground">
              レビューを選択してください
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
