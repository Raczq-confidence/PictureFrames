import styles from "./style.module.scss";

export interface IFrameOptionsProps {
  bg: string;
}

export const FrameOptions: React.FC<IFrameOptionsProps> = ({ bg }) => {
  return <div className={styles.box} style={{ backgroundColor: bg }}></div>;
};
