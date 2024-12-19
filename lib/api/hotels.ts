import { Hotel, CustomInfo } from "@/lib/types/hotel";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://apa-hotel.onrender.com/api";

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

export async function getCustomInfo(hotelId: string): Promise<CustomInfo[]> {
  const response = await fetch(
    `${API_BASE_URL}/hotels/${hotelId}/custom-info`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch custom info");
  }

  return response.json();
}

export async function addCustomInfo(
  hotelId: string,
  data: Partial<CustomInfo>
): Promise<CustomInfo> {
  const response = await fetch(
    `${API_BASE_URL}/hotels/${hotelId}/custom-info`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add custom info");
  }

  return response.json();
}

// ホテル情報更新用の関数を追加
// dataオブジェクトには { name: string; respondents: string[] } などを渡す
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

// カスタム情報をまとめて編集する関数
type BulkEditPayload = {
  inserts: { category: string; items: any[] }[];
  updates: { infoId: string; category: string; items: any[] }[];
  deletes: { infoId: string }[];
};

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

export async function bulkEditCustomInfo(
  hotelId: string,
  payload: BulkEditPayload
): Promise<CustomInfo[]> {
  const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_URL || "https://apa-hotel.onrender.com/api";

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
