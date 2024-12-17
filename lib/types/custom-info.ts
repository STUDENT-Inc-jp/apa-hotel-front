export interface CustomInfoItem {
  id: string;
  value: string;
}

export interface CustomInfo {
  id: string;
  category: string;
  items: CustomInfoItem[];
}