// lib/fetchWithAuth.ts
import { API_CONFIG } from '@/lib/config/api';

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const token = localStorage.getItem('token');
  console.log('fetchWithAuth called with endpoint:', endpoint);
  console.log('Using token:', token);

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  console.log('Final fetch URL:', url);
  console.log('Request headers:', headers);

  const response = await fetch(url, {
    ...options,
    headers,
  });

  console.log('Response status:', response.status, response.statusText);

  let responseData;
  try {
    responseData = await response.json();
  } catch (jsonError) {
    console.error('Failed to parse JSON response:', jsonError);
    throw new Error('Failed to parse JSON from API response');
  }

  if (!response.ok) {
    console.error('API request failed with error response:', responseData);
    throw new Error(responseData.message || 'API request failed');
  }

  console.log('Response data:', responseData);
  return responseData;
}
