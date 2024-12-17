'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { LayoutDashboard, MessageSquare, History, Building2 } from 'lucide-react';

const navigation = [
  {
    name: 'レビュー返答作成',
    href: '/dashboard/chat',
    icon: MessageSquare,
  },
  {
    name: '出力履歴',
    href: '/dashboard/history',
    icon: History,
  },
  {
    name: 'ダッシュボード',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: '設定中のホテル情報',
    href: '/dashboard/company',
    icon: Building2,
  },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:block w-64 border-r bg-muted/20 p-4">
      <div className="space-y-4">
        <div className="py-2">
          <h2 className="px-2 text-lg font-semibold tracking-tight">
            メニュー
          </h2>
        </div>
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                    pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}