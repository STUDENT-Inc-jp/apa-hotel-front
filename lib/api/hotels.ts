import { Hotel, CustomInfo } from '@/lib/types/hotel';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function getHotelInfo(hotelId: string): Promise<Hotel> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch hotel info');
  }

  return response.json();
}

export async function getCustomInfo(hotelId: string): Promise<CustomInfo[]> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}/custom-info`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch custom info');
  }

  return response.json();
}

export async function addCustomInfo(hotelId: string, data: Partial<CustomInfo>): Promise<CustomInfo> {
  const response = await fetch(`${API_BASE_URL}/hotels/${hotelId}/custom-info`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to add custom info');
  }

  return response.json();
}