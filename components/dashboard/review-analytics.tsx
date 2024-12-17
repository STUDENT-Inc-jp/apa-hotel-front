'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useReviews } from '@/lib/hooks/use-reviews';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export function ReviewAnalytics() {
  const { reviews } = useReviews();

  // 星の数ごとのレビュー数を集計
  const ratingCounts = Array.from({ length: 5 }, (_, i) => ({
    rating: i + 1,
    count: reviews.filter(review => review.rating === i + 1).length,
  }));

  // 平均評価を計算
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  // レビューの特徴を分析
  const lowRatingReviews = reviews.filter(review => review.rating <= 2);
  const highRatingReviews = reviews.filter(review => review.rating >= 4);

  const lowRatingKeywords = [
    '清掃', '接客', 'サービス', '設備', '騒音',
    '待ち時間', '予約', '料金', '空調', 'Wi-Fi',
  ].filter(() => Math.random() > 0.5); // サンプルのため、ランダムに特徴を選択

  const highRatingKeywords = [
    'スタッフの対応', '清潔感', '立地', '眺望', '朝食',
    'アメニティ', '温泉', 'サービス', '快適', '静か',
  ].filter(() => Math.random() > 0.5); // サンプルのため、ランダムに特徴を選択

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">評価分布</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ratingCounts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
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
              {Array.from(new Set(reviews.map(r => r.respondentName))).map((name) => (
                <div key={name} className="text-sm">
                  <span className="font-medium">{name}</span>
                  <span className="text-muted-foreground ml-2">
                    ({reviews.filter(r => r.respondentName === name).length}件)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}