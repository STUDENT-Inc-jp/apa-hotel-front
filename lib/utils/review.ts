import type { Review } from '@/lib/types/review';
import { REVIEW_KEYWORDS } from '@/lib/constants/keywords';

export function analyzeReviews(reviews: Review[] | undefined): {
  ratingCounts: { rating: number; count: number }[];
  averageRating: string;
  respondents: { name: string; count: number }[];
  highRatingKeywords: string[];
  lowRatingKeywords: string[];
} {
  if (!reviews) {
    // フォールバック値を返して早期終了
    return {
      ratingCounts: [],
      averageRating: '0.0',
      respondents: [],
      highRatingKeywords: [],
      lowRatingKeywords: [],
    };
  }

  // ここから先は reviews が必ず配列
  const ratingCounts = Array.from({ length: 5 }, (_, i) => ({
    rating: i + 1,
    count: reviews.filter((review) => review.rating === i + 1).length,
  }));

  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : '0.0';

  const respondents = Array.from(new Set(reviews.map((r) => r.respondentName))).map(
    (name) => ({
      name,
      count: reviews.filter((r) => r.respondentName === name).length,
    }),
  );

  // 実際のプロジェクトでは、ここでAIによる特徴分析を行う
  const highRatingKeywords = REVIEW_KEYWORDS.high
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  const lowRatingKeywords = REVIEW_KEYWORDS.low
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

    return {
      ratingCounts,
      averageRating,
      respondents,
      highRatingKeywords,
      lowRatingKeywords,
    };
  }