import { Review, ReviewFormData } from "@/lib/types/review";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://apa-hotel.onrender.com/api";

/**
 * 新規レビュー作成 (POST /reviews)
 * バックエンド側で chat_id や created_at などは自動生成される想定
 */
export async function createReview(data: ReviewFormData): Promise<Review> {
  const response = await fetch(`${API_BASE_URL}/reviews/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    // ReviewFormDataに含まれる `content`, `rating`, `respondentName`, `hotelId`, (任意でcategories)などを送る
    body: JSON.stringify({
      content: data.content,
      rating: data.rating,
      respondent_name: data.respondentName,
      hotel_id: data.hotelId,
      // categories?: data.categories,  // 必要に応じて
      // user_id?: data.userId,         // ログインユーザーIDなど
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create review");
  }

  return response.json();
}

/**
 * レビュー一覧取得 (GET /reviews?hotel_id=xxx&status=xxx)
 */
export async function getReviews(
  hotelId: string,
  status?: string
): Promise<Review[]> {
  const params = new URLSearchParams({ hotelId });
  if (status) {
    params.append("status", status);
  }

  const response = await fetch(`${API_BASE_URL}/reviews?${params}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }

  return response.json();
}

/**
 * レビュー更新 (PUT /reviews/:review_id)
 * edited_response や status, categoriesなどを部分更新できる想定。
 * reviewId は chat_id に相当。
 */
export async function updateReview(
  reviewId: string,
  data: Partial<Review>
): Promise<Review> {
  const response = await fetch(`${API_BASE_URL}/reviews/${reviewId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      edited_response: data.editedResponse,
      status: data.status,
      // rating, categoriesなどの更新が必要なら以下のように追加
      // rating: data.rating,
      // categories: data.categories, // string[]
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update review");
  }

  return response.json();
}
