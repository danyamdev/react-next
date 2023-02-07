import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ITagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  size?: "m" | "s";
  color?: "ghost" | "red" | "green" | "gray" | "primary";
  href?: string;
  children: ReactNode;
}