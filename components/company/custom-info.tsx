'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Pencil, X, Check, Trash, PlusCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useCustomInfo } from '@/lib/hooks/use-custom-info';

export function CustomInfo() {
  const { toast } = useToast();
  const {
    customInfo,
    addCustomInfo,
    updateCustomInfo,
    deleteCustomInfo,
  } = useCustomInfo();
  
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newInfo, setNewInfo] = useState({ category: '', items: [{ id: '0', value: '' }] });
  const [editInfo, setEditInfo] = useState<CustomInfo | null>(null);

  const handleAddItem = () => {
    if (editInfo) {
      setEditInfo({
        ...editInfo,
        items: [...editInfo.items, { id: `new-${Date.now()}`, value: '' }]
      });
    } else {
      setNewInfo({
        ...newInfo,
        items: [...newInfo.items, { id: `new-${Date.now()}`, value: '' }]
      });
    }
  };

  const handleRemoveItem = (itemId: string) => {
    if (editInfo) {
      setEditInfo({
        ...editInfo,
        items: editInfo.items.filter(item => item.id !== itemId)
      });
    } else {
      setNewInfo({
        ...newInfo,
        items: newInfo.items.filter(item => item.id !== itemId)
      });
    }
  };

  const handleUpdateItem = (itemId: string, value: string) => {
    if (editInfo) {
      setEditInfo({
        ...editInfo,
        items: editInfo.items.map(item =>
          item.id === itemId ? { ...item, value } : item
        )
      });
    } else {
      setNewInfo({
        ...newInfo,
        items: newInfo.items.map(item =>
          item.id === itemId ? { ...item, value } : item
        )
      });
    }
  };

  const handleAdd = () => {
    if (!newInfo.category || newInfo.items.some(item => !item.value)) return;

    addCustomInfo(newInfo.category, newInfo.items);
    setIsAdding(false);
    setNewInfo({ category: '', items: [{ id: '0', value: '' }] });
  };

  const handleEdit = (info: CustomInfo) => {
    setEditInfo({ ...info });
    setEditingId(info.id);
  };

  const handleSaveEdit = () => {
    if (!editInfo || !editInfo.category || editInfo.items.some(item => !item.value)) return;
    updateCustomInfo(editInfo);
    setEditingId(null);
    setEditInfo(null);
  };

  const handleDelete = (id: string) => {
    deleteCustomInfo(id);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-xl font-bold">固有情報</CardTitle>
        {!isAdding && !editingId && (
          <Button variant="outline" size="sm" onClick={() => setIsAdding(true)}>
            <Plus className="mr-2 h-4 w-4" />
            追加
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {isAdding && (
          <div className="space-y-4 border p-4 rounded-lg">
            <div className="space-y-2">
              <Label>カテゴリ</Label>
              <Input
                value={newInfo.category}
                onChange={(e) => setNewInfo({ ...newInfo, category: e.target.value })}
                placeholder="例: 営業時間"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>項目</Label>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleAddItem}
                >
                  <PlusCircle className="h-4 w-4 mr-2" />
                  項目を追加
                </Button>
              </div>
              {newInfo.items.map((item, index) => (
                <div key={item.id} className="flex gap-2">
                  <Input
                    value={item.value}
                    onChange={(e) => handleUpdateItem(item.id, e.target.value)}
                    placeholder={`項目 ${index + 1}`}
                  />
                  {newInfo.items.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsAdding(false);
                  setNewInfo({ category: '', items: [{ id: '0', value: '' }] });
                }}
              >
                <X className="mr-2 h-4 w-4" />
                キャンセル
              </Button>
              <Button
                size="sm"
                onClick={handleAdd}
                disabled={!newInfo.category || newInfo.items.some(item => !item.value)}
              >
                <Check className="mr-2 h-4 w-4" />
                追加
              </Button>
            </div>
          </div>
        )}

        {customInfo.map((info) => (
          <div key={info.id} className="border p-4 rounded-lg">
            {editingId === info.id && editInfo ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>カテゴリ</Label>
                  <Input
                    value={editInfo.category}
                    onChange={(e) => setEditInfo({ ...editInfo, category: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>項目</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleAddItem}
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      項目を追加
                    </Button>
                  </div>
                  {editInfo.items.map((item, index) => (
                    <div key={item.id} className="flex gap-2">
                      <Input
                        value={item.value}
                        onChange={(e) => handleUpdateItem(item.id, e.target.value)}
                        placeholder={`項目 ${index + 1}`}
                      />
                      {editInfo.items.length > 1 && (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setEditingId(null);
                      setEditInfo(null);
                    }}
                  >
                    <X className="mr-2 h-4 w-4" />
                    キャンセル
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSaveEdit}
                    disabled={!editInfo.category || editInfo.items.some(item => !item.value)}
                  >
                    <Check className="mr-2 h-4 w-4" />
                    保存
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-2 flex-1">
                    <h3 className="font-medium">{info.category}</h3>
                    <ul className="space-y-1">
                      {info.items.map((item) => (
                        <li key={item.id} className="text-sm text-muted-foreground">
                          {item.value}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(info)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(info.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}