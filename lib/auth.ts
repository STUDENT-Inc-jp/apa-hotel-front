export type User = {
  id: string;
  email: string;
  name: string;
  hotelId: string;
};

export type Hotel = {
  id: string;
  name: string;
  respondents: string[];
};

// サンプルデータ
export const sampleHotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'グランドホテル東京',
    respondents: ['山田太郎', '佐藤花子', '鈴木一郎'],
  },
];

export const sampleUsers: User[] = [
  {
    id: 'user-1',
    email: 'admin@example.com',
    name: '管理者',
    hotelId: 'hotel-1',
  },
];

export async function authenticateUser(email: string, password: string): Promise<User | null> {
  if (password !== 'password123' || email !== 'admin@example.com') {
    return null;
  }

  return sampleUsers[0];
}