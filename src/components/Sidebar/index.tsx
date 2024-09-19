import classNames from "classnames";
import { PropsWithChildren } from "react";
import styles from "./style.module.scss";

export interface ISidebarProps {
  expand: boolean;
  gap?: string;
}

export const Sidebar: React.FC<PropsWithChildren<ISidebarProps>> & {
  Option: React.FC<PropsWithChildren<{}>>;
} = ({ children, expand, gap = "20px" }) => {
  const classes = classNames(styles.sidebar, {
    [styles.open]: expand,
    [styles.close]: !expand,
  });

  return (
    <aside className={classes} style={{ gap }}>
      {children}
    </aside>
  );
};

Sidebar.Option = ({ children }) => {
  return <div className={styles.option}>{children}</div>;
};
