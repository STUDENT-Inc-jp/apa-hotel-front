import { SettingsForm } from '@/components/settings/form';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">設定</h2>
        <p className="text-muted-foreground">
          アカウントと表示に関する設定を管理します
        </p>
      </div>
      <SettingsForm />
    </div>
  );
}