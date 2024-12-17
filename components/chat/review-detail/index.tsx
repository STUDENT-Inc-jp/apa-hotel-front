'use client';

import { useState } from 'react';
import { ReviewContent } from './review-content';
import { ReviewResponse } from './review-response';
import type { Review } from '@/lib/types/review';

interface ReviewDetailProps {
  review: Review;
  onSaveEdit: (review: Review, editedResponse: string, markAsCompleted: boolean) => void;
}

export function ReviewDetail({ review, onSaveEdit }: ReviewDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedResponse, setEditedResponse] = useState(review.editedResponse || review.aiResponse || '');

  const handleSave = () => {
    onSaveEdit(review, editedResponse, false);
    setIsEditing(false);
  };

  const handleCheck = () => {
    onSaveEdit(review, review.editedResponse || review.aiResponse || '', true);
  };

  return (
    <div className="space-y-6">
      <ReviewContent review={review} />

      {review.aiResponse && (
        <ReviewResponse
          title="AI生成回答"
          content={review.aiResponse}
          isEditing={false}
          isEditable={false}
          editedContent=""
          onEdit={() => {}}
          onCancel={() => {}}
          onSave={() => {}}
          onChange={() => {}}
        />
      )}

      <ReviewResponse
        title="校正回答"
        content={review.editedResponse || review.aiResponse || ''}
        isEditing={isEditing}
        isEditable={true}
        editedContent={editedResponse}
        onEdit={() => setIsEditing(true)}
        onCancel={() => {
          setIsEditing(false);
          setEditedResponse(review.editedResponse || review.aiResponse || '');
        }}
        onSave={handleSave}
        onCheck={review.status === 'draft' ? handleCheck : undefined}
        onChange={setEditedResponse}
      />
    </div>
  );
}