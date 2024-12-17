'use client';

import { ReviewChart } from './review-chart';
import { ReviewFeatures } from './review-features';
import { useReviews } from '@/lib/hooks/use-reviews';
import { analyzeReviews } from '@/lib/utils/review';

export function ReviewAnalytics() {
  const { reviews } = useReviews();
  const analysis = analyzeReviews(reviews);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ReviewChart
        ratingCounts={analysis.ratingCounts}
        averageRating={analysis.averageRating}
      />
      <ReviewFeatures
        highRatingKeywords={analysis.highRatingKeywords}
        lowRatingKeywords={analysis.lowRatingKeywords}
        respondents={analysis.respondents}
      />
    </div>
  );
}