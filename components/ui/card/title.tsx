'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CardTitleProps } from './types';

export const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    const { style, ...safeProps } = props;

    return (
      <h3
        ref={ref}
        className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
        {...safeProps}
      />
    );
  }
);
CardTitle.displayName = 'CardTitle';