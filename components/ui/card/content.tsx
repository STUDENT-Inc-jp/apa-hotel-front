'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CardContentProps } from './types';

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    const { style, ...safeProps } = props;

    return (
      <div 
        ref={ref} 
        className={cn('p-6 pt-0', className)} 
        {...safeProps} 
      />
    );
  }
);
CardContent.displayName = 'CardContent';