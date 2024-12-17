'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CardFooterProps } from './types';

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    const { style, ...safeProps } = props;

    return (
      <div
        ref={ref}
        className={cn('flex items-center p-6 pt-0', className)}
        {...safeProps}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';