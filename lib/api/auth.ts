import { API_CONFIG } from "@/lib/config/api";
import { fetchWithAuth } from "./base";
import type { User } from "@/lib/types/user";

export async function login(
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  return fetchWithAuth(API_CONFIG.ENDPOINTS.AUTH.LOGIN, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function getCurrentUser(): Promise<User> {
  return fetchWithAuth(API_CONFIG.ENDPOINTS.AUTH.ME);
}

export async function logout(): Promise<void> {
  return fetchWithAuth(API_CONFIG.ENDPOINTS.AUTH.LOGOUT, {
    method: "POST",
  });
}
