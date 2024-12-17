'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { MessageSquare, Check, Star, Clock } from 'lucide-react';
import type { Review } from './interface';

interface ReviewListProps {
  reviews: Review[];
  selectedReview: Review | null;
  onSelectReview: (review: Review) => void;
}

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
                    <Button
                      key={review.id}
                      variant={selectedReview?.id === review.id ? 'secondary' : 'ghost'}
                      className="w-full justify-start text-left p-4"
                      onClick={() => onSelectReview(review)}
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
                  ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}