'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { MessageSquare, Check } from 'lucide-react';
import { ReviewListItem } from './review-list-item';
import type { ReviewListProps } from '../types';

export function ReviewList({ reviews, selectedReview, onSelectReview }: ReviewListProps) {
  return (
    <Card className="h-full">
      <Tabs defaultValue="draft" className="h-full">
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="draft" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            AI回答
          </TabsTrigger>
          <TabsTrigger value="completed" className="flex items-center gap-2">
            <Check className="h-4 w-4" />
            チェック済み
          </TabsTrigger>
        </TabsList>
        {['draft', 'completed'].map((status) => (
          <TabsContent key={status} value={status} className="h-[calc(100%-2.5rem)]">
            <ScrollArea className="h-full pr-4">
              <div className="space-y-2 p-2">
                {reviews
                  .filter(review => review.status === status)
                  .map(review => (
                    <ReviewListItem
                      key={review.id}
                      review={review}
                      isSelected={selectedReview?.id === review.id}
                      onSelect={onSelectReview}
                    />
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}