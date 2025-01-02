export type ReviewStatus = 'draft' | 'completed';

export interface Review {
  id: string;
  content: string;
  rating: number;
  date: string;
  status: ReviewStatus;
  aiResponse?: string;
  editedResponse?: string;
  respondentName: string;
}

export interface ReviewFormData {
  content: string;
  rating: number;
  respondentName: string;
}