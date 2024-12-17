'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import type { CustomInfo, CustomInfoItem } from '@/lib/types/custom-info';
import { sampleCustomInfo } from '@/lib/constants/sample-data';

export function useCustomInfo() {
  const [customInfo, setCustomInfo] = useState<CustomInfo[]>(sampleCustomInfo);
  const { toast } = useToast();

  const addCustomInfo = (category: string, items: CustomInfoItem[]) => {
    const newCategory: CustomInfo = {
      id: `custom-${Date.now()}`,
      category,
      items: items.map(item => ({
        ...item,
        id: `${Date.now()}-${item.id}`
      }))
    };

    setCustomInfo(prev => [...prev, newCategory]);
    toast({
      title: '追加完了',
      description: '固有情報を追加しました',
    });
  };

  const updateCustomInfo = (updatedInfo: CustomInfo) => {
    setCustomInfo(prev => prev.map(info =>
      info.id === updatedInfo.id ? updatedInfo : info
    ));
    toast({
      title: '更新完了',
      description: '固有情報を更新しました',
    });
  };

  const deleteCustomInfo = (id: string) => {
    setCustomInfo(prev => prev.filter(info => info.id !== id));
    toast({
      title: '削除完了',
      description: '固有情報を削除しました',
    });
  };

  return {
    customInfo,
    addCustomInfo,
    updateCustomInfo,
    deleteCustomInfo,
  };
}