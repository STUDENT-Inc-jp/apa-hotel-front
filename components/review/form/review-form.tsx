'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth-context';
import { sampleHotels } from '@/lib/auth'; // 仮のホテルデータ
import type { ReviewFormProps } from '../types';

export function ReviewForm({ onSubmit }: ReviewFormProps) {
  const { user } = useAuth();
  const hotel = sampleHotels.find(h => h.id === user?.hotelId);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState<string>('');
  const [respondentName, setRespondentName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !rating || !respondentName) return;

    onSubmit({
      content,
      rating: parseInt(rating, 10),
      respondentName,
    });

    setContent('');
    setRating('');
    setRespondentName('');
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">レビュー回答生成</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="content">レビュー内容</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="レビュー内容を入力してください"
              className="h-32"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="rating">評価</Label>
              <Select
                value={rating}
                onValueChange={setRating}
              >
                <SelectTrigger id="rating">
                  <SelectValue placeholder="評価を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {[5, 4, 3, 2, 1].map((value) => (
                    <SelectItem key={value} value={value.toString()}>
                      {'★'.repeat(value)} ({value})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="respondentName">回答担当者</Label>
              <Select
                value={respondentName}
                onValueChange={setRespondentName}
              >
                <SelectTrigger id="respondentName">
                  <SelectValue placeholder="担当者を選択してください" />
                </SelectTrigger>
                <SelectContent>
                  {hotel?.respondents.map((name) => (
                    <SelectItem key={name} value={name}>
                      {name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={!content || !rating || !respondentName}
          >
            AI回答を生成
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
