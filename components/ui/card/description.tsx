'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import type { CardDescriptionProps } from './types';

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    const { style, ...safeProps } = props;

    return (
      <p
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...safeProps}
      />
    );
  }
);
CardDescription.displayName = 'CardDescription';