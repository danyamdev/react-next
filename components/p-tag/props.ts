import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IPTagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'l' | 'm' | 's';
  children: ReactNode;
}
