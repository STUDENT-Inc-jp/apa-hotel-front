'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { BarChart } from '@/components/ui/chart';

interface ReviewChartProps {
  ratingCounts: Array<{ rating: number; count: number }>;
  averageRating: string;
}

export function ReviewChart({ ratingCounts, averageRating }: ReviewChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">評価分布</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] mt-4">
          <BarChart data={ratingCounts} />
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">平均評価</p>
          <div className="flex items-center justify-center gap-1 text-2xl font-bold">
            <Star className="h-6 w-6 text-yellow-500 fill-current" />
            {averageRating}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}