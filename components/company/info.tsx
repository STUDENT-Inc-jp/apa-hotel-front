'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth-context';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { CompanyInfoItem } from './info-item';
import { CompanyInfoEdit } from './info-edit';
import { useToast } from '@/hooks/use-toast';
import { fetchWithAuth } from '@/lib/fetchWithAuth';
import { API_CONFIG } from '@/lib/config/api';

export type CompanyData = {
  name: string;
  respondents: string[];
};

type Hotel = {
  hotel_id: string;
  name: string;
  address: string;
  respondents: string[];
  created_at: string;
  updated_at: string;
};

export function CompanyInfo() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<CompanyData | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      console.log('User object in useEffect:', user);

      if (!user?.hotelId) {
        console.log('No hotelId found on user. Cannot fetch hotel.');
        return;
      }

      console.log('Fetching hotel data for hotelId:', user.hotelId);
      try {
        const url = API_CONFIG.ENDPOINTS.HOTELS.INFO(user.hotelId);
        console.log('API endpoint being fetched:', API_CONFIG.BASE_URL + url);
        const data = await fetchWithAuth(url);
        console.log('Fetched hotel data:', data);
        setHotel(data);
      } catch (err: any) {
        console.error('Failed to fetch hotel data', err);
      }
    };
    fetchHotel();
  }, [user?.hotelId]);

  if (!hotel) {
    console.log('No hotel data available at render time.');
    return <div>ホテル情報が見つかりません。</div>;
  }

  const handleStartEdit = () => {
    console.log('Starting edit with data:', hotel);
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
    console.log('Saving edited data:', data);
    // TODO: 実際のAPIコールをここに実装
    toast({
      title: '保存完了',
      description: 'ホテル情報を更新しました',
    });
    setIsEditing(false);
    setEditData(null);
  };

  console.log('Rendering CompanyInfo with hotel:', hotel);

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
