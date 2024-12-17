'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CardHeaderProps } from './types';

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    const { style, ...safeProps } = props;

    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 p-6', className)}
        {...safeProps}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';