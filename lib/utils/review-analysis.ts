import type { Review } from '@/lib/types/review';
import { REVIEW_KEYWORDS } from '@/lib/constants/keywords';

export function analyzeReviewKeywords(reviews: Review[]) {
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
    highRatingKeywords,
    lowRatingKeywords,
  };
}

export function getRespondentStats(reviews: Review[]) {
  const respondents = Array.from(new Set(reviews.map(r => r.respondentName)))
    .map(name => ({
      name,
      count: reviews.filter(r => r.respondentName === name).length,
    }));

  return respondents;
}