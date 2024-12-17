'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CardProps } from './types';

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    // Remove style attribute to prevent hydration mismatch
    const { style, ...safeProps } = props;

    return (
      <div
        ref={ref}
        className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
        {...safeProps}
      />
    );
  }
);
Card.displayName = 'Card';