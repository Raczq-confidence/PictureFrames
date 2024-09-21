import { Image } from "antd";
import { useEffect } from "react";
import { useFileList } from "~/hooks";
import styles from "./styles.module.scss";
import { DEFAULT_INFO } from "~/providers";

export interface IFrostedGlassFrameProps {
  src: string;
}

export const FrostedGlassFrame: React.FC<IFrostedGlassFrameProps> = ({
  src,
}) => {
  const { uploadFiles, fileList } = useFileList();

  useEffect(() => {
    (async () => {
      const blob = await (await fetch(src)).blob();
      uploadFiles(new File([blob], "image.jpg"));
    })();
  }, []);

  const EXInfo = () => {
    const { FNumber, ExposureTime, ISO, FocalLength } =
      fileList?.[0]?.exInfo ?? DEFAULT_INFO;

    return (
      <span
        className={styles.info}
      >{`${FocalLength}  ${FNumber}  ${ExposureTime}  ${ISO}`}</span>
    );
  };

  return (
    <div className={styles.bg} style={{ backgroundImage: `url(${src})` }}>
      <div className={styles["glass-effect"]}>
        <Image className={styles.image} preview={false} width={450} src={src} />
        {fileList[0] ? <EXInfo /> : null}
      </div>
    </div>
  );
};
