"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { bulkEditCustomInfo, getCustomInfo } from "@/lib/api/hotels";
import { useAuth } from "@/lib/auth-context";
import type { CustomInfo as CustomInfoType } from "@/lib/types/hotel";

// ① カスタムフック: 固有情報の取得・更新ロジック
function useCustomInfoHook(hotelId: string) {
  const [customInfo, setCustomInfo] = useState<CustomInfoType[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    if (!hotelId) return;
    (async () => {
      try {
        const data = await getCustomInfo(hotelId);
        setCustomInfo(data);
      } catch (err) {
        console.error("Failed to fetch custom info:", err);
      }
    })();
  }, [hotelId]);

  // 追加
  const addCustomInfo = async (category: string, items: { id: string; value: string }[]) => {
    if (!hotelId) return;
    const payload = {
      inserts: [
        {
          category,
          items: items.map((i) => ({ item_id: i.id, value: i.value })),
        },
      ],
      updates: [],
      deletes: [],
    };
    try {
      const updated = await bulkEditCustomInfo(hotelId, payload);
      setCustomInfo(updated);
      toast({ title: "追加完了", description: "固有情報を追加しました" });
    } catch (err) {
      console.error(err);
      toast({ title: "エラー", description: "固有情報の追加に失敗しました。", variant: "destructive" });
    }
  };

  // 更新
  const updateCustomInfo = async (info: CustomInfoType) => {
    if (!hotelId) return;
    const payload = {
      inserts: [],
      updates: [
        {
          infoId: info.id,
          category: info.category,
          items: info.items.map((i) => ({ item_id: i.id, value: i.value })),
        },
      ],
      deletes: [],
    };
    try {
      const updated = await bulkEditCustomInfo(hotelId, payload);
      setCustomInfo(updated);
      toast({ title: "更新完了", description: "固有情報を更新しました" });
    } catch (err) {
      console.error(err);
      toast({ title: "エラー", description: "固有情報の更新に失敗しました。", variant: "destructive" });
    }
  };

  // 削除
  const deleteCustomInfo = async (id: string) => {
    if (!hotelId) return;
    const payload = {
      inserts: [],
      updates: [],
      deletes: [{ infoId: id }],
    };
    try {
      const updated = await bulkEditCustomInfo(hotelId, payload);
      setCustomInfo(updated);
      toast({ title: "削除完了", description: "固有情報を削除しました" });
    } catch (err) {
      console.error(err);
      toast({ title: "エラー", description: "固有情報の削除に失敗しました。", variant: "destructive" });
    }
  };

  return {
    customInfo,
    addCustomInfo,
    updateCustomInfo,
    deleteCustomInfo,
  };
}

// ② UIコンポーネント: 固有情報の表示・編集画面
export function CustomInfo() {
  const { user } = useAuth();
  const hotelId = user?.hotelId || "";
  
  // カスタムフックを呼び出し、データと操作関数を取得
  const { customInfo, addCustomInfo, updateCustomInfo, deleteCustomInfo } = useCustomInfoHook(hotelId);

  // ここでは簡略表示のみ
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem" }}>
      <h2>Custom Info for Hotel: {hotelId}</h2>
      {/* 例: データ一覧表示 */}
      {customInfo.length === 0 ? (
        <p>固有情報はありません</p>
      ) : (
        customInfo.map((info) => (
          <div key={info.id} style={{ marginTop: "1rem" }}>
            <strong>{info.category}</strong>
            <ul>
              {info.items.map((item) => (
                <li key={item.id}>{item.value}</li>
              ))}
            </ul>
            <button onClick={() => deleteCustomInfo(info.id)}>削除</button>
          </div>
        ))
      )}
    </div>
  );
}
