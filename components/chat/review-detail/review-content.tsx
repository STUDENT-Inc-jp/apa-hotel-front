import { Clock, Star } from 'lucide-react';
import type { Review } from '@/lib/types/review';

interface ReviewContentProps {
  review: Review;
}

export function ReviewContent({ review }: ReviewContentProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">レビュー内容</h3>
      <div className="bg-muted p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'stroke-current'}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            {review.date}
          </div>
        </div>
        <p className="text-sm">{review.content}</p>
      </div>
    </div>
  );
}