'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { bulkEditCustomInfo, getCustomInfo } from '@/lib/api/hotels'; 
import type { CustomInfo } from '@/lib/types/hotel'; 
import { useAuth } from '@/lib/auth-context';

type CustomInfoItem = {
  id: string;
  value: string;
};

export function useCustomInfo(hotelId: string) {
  const [customInfo, setCustomInfo] = useState<CustomInfo[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      if (!hotelId) return;
      try {
        const data = await getCustomInfo(hotelId);
        setCustomInfo(data);
      } catch (err) {
        console.error("Failed to fetch custom info:", err);
      }
    };
    fetchData();
  }, [hotelId]);

  const addCustomInfo = async (category: string, items: CustomInfoItem[]) => {
    if (!hotelId) return;

    // Bulk edit用ペイロード: insertsに1件追加
    const payload = {
      inserts: [{
        category,
        items: items.map(i => ({ item_id: i.id, value: i.value }))
      }],
      updates: [],
      deletes: []
    };

    try {
      const updated = await bulkEditCustomInfo(hotelId, payload);
      setCustomInfo(updated);
      toast({
        title: '追加完了',
        description: '固有情報を追加しました',
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'エラー',
        description: '固有情報の追加に失敗しました。',
        variant: 'destructive',
      });
    }
  };

  const updateCustomInfo = async (info: CustomInfo) => {
    if (!hotelId) return;

    // Bulk edit用ペイロード: updatesに1件追加
    // info.id（ = infoId）, info.category, info.itemsを`updates`として送る
    const payload = {
      inserts: [],
      updates: [{
        infoId: info.id,
        category: info.category,
        items: info.items.map(i => ({ item_id: i.id, value: i.value }))
      }],
      deletes: []
    };

    try {
      const updated = await bulkEditCustomInfo(hotelId, payload);
      setCustomInfo(updated);
      toast({
        title: '更新完了',
        description: '固有情報を更新しました',
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'エラー',
        description: '固有情報の更新に失敗しました。',
        variant: 'destructive',
      });
    }
  };

  const deleteCustomInfo = async (id: string) => {
    if (!hotelId) return;

    // Bulk edit用ペイロード: deletesに1件追加
    const payload = {
      inserts: [],
      updates: [],
      deletes: [{ infoId: id }]
    };

    try {
      const updated = await bulkEditCustomInfo(hotelId, payload);
      setCustomInfo(updated);
      toast({
        title: '削除完了',
        description: '固有情報を削除しました',
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'エラー',
        description: '固有情報の削除に失敗しました。',
        variant: 'destructive',
      });
    }
  };

  return {
    customInfo,
    addCustomInfo,
    updateCustomInfo,
    deleteCustomInfo,
  };
}
