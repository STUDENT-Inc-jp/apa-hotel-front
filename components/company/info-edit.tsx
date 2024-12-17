'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Trash, Check, X } from 'lucide-react';
import type { CompanyData } from './info';

interface CompanyInfoEditProps {
  initialData: CompanyData;
  onSave: (data: CompanyData) => void;
  onCancel: () => void;
}

export function CompanyInfoEdit({ initialData, onSave, onCancel }: CompanyInfoEditProps) {
  const [formData, setFormData] = useState(initialData);

  const handleAddRespondent = () => {
    setFormData({
      ...formData,
      respondents: [...formData.respondents, ''],
    });
  };

  const handleRemoveRespondent = (index: number) => {
    setFormData({
      ...formData,
      respondents: formData.respondents.filter((_, i) => i !== index),
    });
  };

  const handleRespondentChange = (index: number, value: string) => {
    const newRespondents = [...formData.respondents];
    newRespondents[index] = value;
    setFormData({
      ...formData,
      respondents: newRespondents,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">ホテル名</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>回答担当者</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleAddRespondent}
          >
            <Plus className="h-4 w-4 mr-2" />
            担当者を追加
          </Button>
        </div>
        <div className="space-y-2">
          {formData.respondents.map((name, index) => (
            <div key={index} className="flex gap-2">
              <Input
                value={name}
                onChange={(e) => handleRespondentChange(index, e.target.value)}
                placeholder={`担当者 ${index + 1}`}
                required
              />
              {formData.respondents.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveRespondent(index)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onCancel}
        >
          <X className="h-4 w-4 mr-2" />
          キャンセル
        </Button>
        <Button
          type="submit"
          size="sm"
        >
          <Check className="h-4 w-4 mr-2" />
          保存
        </Button>
      </div>
    </form>
  );
}