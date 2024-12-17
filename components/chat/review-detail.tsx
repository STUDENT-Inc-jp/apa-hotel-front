'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star, Clock, Pencil, Check, X, CheckCircle2 } from 'lucide-react';
import type { Review } from '@/lib/types/review';

interface ReviewDetailProps {
  review: Review;
  onSaveEdit: (
    review: Review,
    editedResponse: string,
    markAsCompleted: boolean
  ) => void;
}

export function ReviewDetail({ review, onSaveEdit }: ReviewDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedResponse, setEditedResponse] = useState(
    review.editedResponse || review.aiResponse || ''
  );

  const handleSave = (markAsCompleted: boolean = false) => {
    onSaveEdit(review, editedResponse, markAsCompleted);
    setIsEditing(false);
  };

  const handleCheck = () => {
    onSaveEdit(review, review.editedResponse || review.aiResponse || '', true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">レビュー内容</h3>
        <div className="bg-muted p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? 'fill-current' : 'stroke-current'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {review.date}
            </div>
          </div>
          <p className="text-sm">{review.content}</p>
        </div>
      </div>

      {review.aiResponse && (
        <div>
          <h4 className="font-semibold mb-2">AI生成回答</h4>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm">{review.aiResponse}</p>
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold">編集済み回答</h4>
          <div className="flex gap-2">
            {!isEditing && review.status === 'draft' && (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  <Pencil className="h-4 w-4 mr-2" />
                  編集
                </Button>
                <Button variant="secondary" size="sm" onClick={handleCheck}>
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  チェック
                </Button>
              </>
            )}
            {!isEditing && review.status === 'completed' && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsEditing(true)}
              >
                <Pencil className="h-4 w-4 mr-2" />
                再編集
              </Button>
            )}
          </div>
        </div>
        {isEditing ? (
          <div className="space-y-2">
            <Textarea
              value={editedResponse}
              onChange={(e) => setEditedResponse(e.target.value)}
              className="min-h-[200px]"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsEditing(false);
                  setEditedResponse(
                    review.editedResponse || review.aiResponse || ''
                  );
                }}
              >
                <X className="h-4 w-4 mr-2" />
                キャンセル
              </Button>
              <Button size="sm" onClick={() => handleSave(false)}>
                <Check className="h-4 w-4 mr-2" />
                保存
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm">
              {review.editedResponse || review.aiResponse}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
