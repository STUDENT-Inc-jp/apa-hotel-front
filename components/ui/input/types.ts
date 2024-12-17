import { InputHTMLAttributes } from 'react';

export interface InputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'style' | 'autocomplete' | 'data-has-passwords-badge'
> {
  // Add any custom props here
}