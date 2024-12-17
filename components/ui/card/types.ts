import { HTMLAttributes } from 'react';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {}
export interface CardHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {}
export interface CardFooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {}
export interface CardTitleProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'style'> {}
export interface CardDescriptionProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'style'> {}
export interface CardContentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {}