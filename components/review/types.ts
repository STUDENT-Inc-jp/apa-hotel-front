import type { Review } from '@/lib/types/review';

export interface ReviewListProps {
  reviews: Review[];
  selectedReview: Review | null;
  onSelectReview: (review: Review) => void;
}

export interface ReviewDetailProps {
  review: Review;
  onSaveEdit: (review: Review, editedResponse: string, markAsCompleted: boolean) => void;
}

export interface ReviewFormProps {
  onSubmit: (data: { content: string; rating: number; respondentName: string }) => void;
}

export interface ReviewContentProps {
  review: Review;
}

export interface ReviewResponseProps {
  title: string;
  content: string;
  isEditing: boolean;
  isEditable: boolean;
  editedContent: string;
  onEdit: () => void;
  onCancel: () => void;
  onSave: () => void;
  onCheck?: () => void;
  onChange: (value: string) => void;
}