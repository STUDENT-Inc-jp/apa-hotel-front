'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil, Plus, Trash } from 'lucide-react';
import { sampleHotels } from '@/lib/auth';
import { CompanyInfoItem } from './info-item';
import { CompanyInfoEdit } from './info-edit';
import { useToast } from '@/hooks/use-toast';

export type CompanyData = {
  name: string;
  respondents: string[];
};

export function CompanyInfo() {
  const { user } = useAuth();
  const { toast } = useToast();
  const hotel = sampleHotels.find(h => h.id === user?.hotelId);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<CompanyData | null>(null);

  if (!hotel) {
    return <div>ホテル情報が見つかりません。</div>;
  }

  const handleStartEdit = () => {
    setEditData({
      name: hotel.name,
      respondents: hotel.respondents,
    });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditData(null);
  };

  const handleSaveEdit = async (data: CompanyData) => {
    // 実際のAPIコールをここで行う
    toast({
      title: '保存完了',
      description: 'ホテル情報を更新しました',
    });
    setIsEditing(false);
    setEditData(null);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">基本情報</CardTitle>
        <Button variant="outline" size="sm" onClick={handleStartEdit}>
          <Pencil className="mr-2 h-4 w-4" />
          編集
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEditing && editData ? (
          <CompanyInfoEdit
            initialData={editData}
            onSave={handleSaveEdit}
            onCancel={handleCancelEdit}
          />
        ) : (
          <>
            <CompanyInfoItem label="ホテル名" value={hotel.name} />
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground">回答担当者</p>
              <div className="space-y-1">
                {hotel.respondents.map((name, index) => (
                  <p key={index} className="text-sm font-medium">{name}</p>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}