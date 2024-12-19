import { Hotel, CustomInfo } from "@/lib/types/hotel";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://apa-hotel.onrender.com/api";

/**
 * ホテル情報を取得
 */
export async function getHotelInfo(hotelId: string): Promise<Hotel> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch hotel info");
  }

  return response.json();
}

/**
 * ホテル固有情報一覧を取得
 */
export async function getCustomInfo(hotelId: string): Promise<CustomInfo[]> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}/custom-info`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch custom info");
  }

  return response.json();
}

/**
 * ホテル固有情報を1件追加
 */
export async function addCustomInfo(
  hotelId: string,
  data: Partial<CustomInfo>
): Promise<CustomInfo> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}/custom-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to add custom info");
  }

  return response.json();
}

/**
 * ホテル基本情報更新
 */
export async function updateHotelInfo(
  hotelId: string,
  data: { name: string; respondents: string[] }
): Promise<Hotel> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update hotel info");
  }

  return response.json();
}

/**
 * CustomInfo一括編集用の型定義
 */
type CustomInfoItem = {
  item_id: string;
  value: string;
};

type CustomInfoPayload = {
  category: string;
  items: CustomInfoItem[];
};

type BulkEditPayload = {
  inserts: CustomInfoPayload[];
  updates: (CustomInfoPayload & { infoId: string })[];
  deletes: { infoId: string }[];
};

/**
 * ホテル固有情報一括編集 (INSERT/UPDATE/DELETE)
 */
export async function bulkEditCustomInfo(
  hotelId: string,
  payload: BulkEditPayload
): Promise<CustomInfo[]> {
  const response = await fetch(
    `${API_BASE_URL}/hotels/${hotelId}/custom-info/bulk`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to bulk edit custom info");
  }

  return response.json();
}
