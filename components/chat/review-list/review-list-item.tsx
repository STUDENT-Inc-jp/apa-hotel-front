'use client';

import { Button } from '@/components/ui/button';
import { Star, Clock } from 'lucide-react';
import type { Review } from '@/lib/types/review';

interface ReviewListItemProps {
  review: Review;
  isSelected: boolean;
  onSelect: (review: Review) => void;
}

export function ReviewListItem({ review, isSelected, onSelect }: ReviewListItemProps) {
  return (
    <Button
      variant={isSelected ? 'secondary' : 'ghost'}
      className="w-full justify-start text-left p-4"
      onClick={() => onSelect(review)}
    >
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="font-medium">{review.rating}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {review.date}
          </div>
        </div>
        <p className="text-sm line-clamp-2">{review.content}</p>
      </div>
    </Button>
  );
}