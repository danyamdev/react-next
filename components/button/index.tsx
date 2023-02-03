import cn from "classnames";

import { IButtonProps } from "@/components/button/props";

import ArrowIcon  from "@/components/button/arrow.svg";
import styles from "@/components/button/button.module.css";

export const Button = ({ view, children, arrow = "none", className, ...props }: IButtonProps): JSX.Element => {
 return (
   <button
     className={
       cn(styles.button, className, {
         [styles.primary]: view === "primary",
         [styles.ghost]: view === "ghost"
       })}
     {...props}>
     {children}
     {arrow !== "none" && (
       <span className={cn(styles.arrow, {
         [styles.down]: arrow === "down"
       })}>
         <ArrowIcon />
       </span>
     )}
   </button>
 );
};