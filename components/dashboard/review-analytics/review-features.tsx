'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ReviewFeaturesProps {
  highRatingKeywords: string[];
  lowRatingKeywords: string[];
  respondents: Array<{ name: string; count: number }>;
}

export function ReviewFeatures({
  highRatingKeywords,
  lowRatingKeywords,
  respondents,
}: ReviewFeaturesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">レビュー特徴分析</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            高評価の特徴
          </h4>
          <div className="flex flex-wrap gap-2">
            {highRatingKeywords.map((keyword) => (
              <Badge key={keyword} variant="secondary">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-500" />
            低評価の特徴
          </h4>
          <div className="flex flex-wrap gap-2">
            {lowRatingKeywords.map((keyword) => (
              <Badge key={keyword} variant="outline">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <h4 className="font-medium mb-2">回答担当者</h4>
          <div className="grid grid-cols-2 gap-4">
            {respondents.map(({ name, count }) => (
              <div key={name} className="text-sm">
                <span className="font-medium">{name}</span>
                <span className="text-muted-foreground ml-2">
                  ({count}件)
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}