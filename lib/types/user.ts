export type User = {
  userId: string;
  email: string;
  hotelId: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
};
