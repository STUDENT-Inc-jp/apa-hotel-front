import { Review, ReviewFormData } from "@/lib/types/review";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://apa-hotel.onrender.com/api";

export async function createReview(data: ReviewFormData): Promise<Review> {
  const response = await fetch(`${API_BASE_URL}/reviews/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });

  console.log("response", response);
  if (!response.ok) {
    throw new Error("Failed to create review");
  }

  return response.json();
}

export async function getReviews(
  hotelId: string,
  status?: string
): Promise<Review[]> {
  const params = new URLSearchParams({ hotelId });
  if (status) params.append("status", status);

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
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update review");
  }

  return response.json();
}
