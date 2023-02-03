import { IHTagProps } from "@/components/h-tag/props";

import styles from "@/components/h-tag/h-tag.module.css";

export const HTag = ({ tag, children }: IHTagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styles[tag]}>{children}</h1>;
    case "h2":
      return <h2 className={styles[tag]}>{children}</h2>;
    case "h3":
      return <h3 className={styles[tag]}>{children}</h3>;
    default:
      return <></>;
  }
};