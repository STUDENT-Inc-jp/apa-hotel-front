import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Pencil, X } from 'lucide-react';

interface ReviewResponseProps {
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

export function ReviewResponse({
  title,
  content,
  isEditing,
  isEditable,
  editedContent,
  onEdit,
  onCancel,
  onSave,
  onCheck,
  onChange,
}: ReviewResponseProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">{title}</h4>
        {isEditable && !isEditing && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onEdit}
            >
              <Pencil className="h-4 w-4 mr-2" />
              編集
            </Button>
            {onCheck && (
              <Button
                variant="secondary"
                size="sm"
                onClick={onCheck}
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                チェック
              </Button>
            )}
          </div>
        )}
      </div>
      {isEditing ? (
        <div className="space-y-2">
          <Textarea
            value={editedContent}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[200px]"
          />
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onCancel}
            >
              <X className="h-4 w-4 mr-2" />
              キャンセル
            </Button>
            <Button
              size="sm"
              onClick={onSave}
            >
              保存
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-muted p-4 rounded-lg">
          <p className="text-sm">{content}</p>
        </div>
      )}
    </div>
  );
}