import type { Review } from '@/lib/types/review';

export function calculateRatingDistribution(reviews: Review[]) {
  return Array.from({ length: 5 }, (_, i) => ({
    rating: i + 1,
    count: reviews.filter(review => review.rating === i + 1).length,
  }));
}

export function calculateAverageRating(reviews: Review[]) {
  if (reviews.length === 0) return '0.0';
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return (sum / reviews.length).toFixed(1);
}