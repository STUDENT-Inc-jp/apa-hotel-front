export interface Review {
  id: string;
  content: string;
  rating: number;
  date: string;
  status: 'draft' | 'completed';
  aiResponse?: string;
  editedResponse?: string;
  respondentName: string;
}

export interface ReviewFormData {
  content: string;
  rating: number;
  respondentName: string;
}