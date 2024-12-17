'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoginForm } from '@/components/login-form';
import { useAuth } from '@/lib/auth-context';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get('from');

  useEffect(() => {
    if (user) {
      router.push(from || '/dashboard');
    }
  }, [user, router, from]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <LoginForm />
    </main>
  );
}