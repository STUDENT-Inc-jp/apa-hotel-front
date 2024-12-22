'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, CheckCircle2 } from 'lucide-react';
import { ReviewAnalytics } from '@/components/dashboard/review-analytics';
import { useReviews } from '@/lib/hooks/use-reviews';

export default function DashboardPage() {
  const { reviews } = useReviews() || {}; 
  // ↑ ここでデフォルト値 {} を返しておけば reviews が undefined のときでも参照エラーになりにくい
  // もしくは const { reviews = [] } = useReviews(); のようにすると reviews が undefined 時は [] になる

  const safeReviews = reviews || []; // reviews が undefined の場合は空配列扱い

  const draftCount = safeReviews.filter(r => r.status === 'draft').length;
  const completedCount = safeReviews.filter(r => r.status === 'completed').length;

  const stats = [
    {
      title: 'AI回答数',
      value: draftCount.toString(),
      icon: MessageSquare,
      description: '生成されたAI回答の総数',
    },
    {
      title: 'チェック済み数',
      value: completedCount.toString(),
      icon: CheckCircle2,
      description: '確認済みの回答数',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">ダッシュボード</h1>
        <p className="text-muted-foreground">
          システムの概要と統計情報を確認できます
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <ReviewAnalytics />
    </div>
  );
}