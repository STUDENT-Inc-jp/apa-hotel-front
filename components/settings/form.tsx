'use client';

import { useAuth } from '@/lib/auth-context';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export function SettingsForm() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // 設定の保存をシミュレート
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: '設定を保存しました',
        description: '変更が正常に適用されました。',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>アカウント設定</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">名前</Label>
              <Input
                id="name"
                defaultValue={user?.name}
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス</Label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email}
                disabled={true}
              />
              <p className="text-sm text-muted-foreground">
                メールアドレスは変更できません
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>表示設定</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="theme">テーマ</Label>
              <Select
                defaultValue={theme}
                onValueChange={setTheme}
                disabled={isLoading}
              >
                <SelectTrigger id="theme">
                  <SelectValue placeholder="テーマを選択" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">ライト</SelectItem>
                  <SelectItem value="dark">ダーク</SelectItem>
                  <SelectItem value="system">システム設定に従う</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Button type="submit" disabled={isLoading}>
          {isLoading ? '保存中...' : '設定を保存'}
        </Button>
      </div>
    </form>
  );
}