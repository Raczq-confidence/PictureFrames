import { useState } from "react";
import { FrameOptions, FrostedGlassFrame, Sidebar, TopBar } from "~/components";
import styles from "./styles.module.scss";
import "./global.scss";

const { Option } = Sidebar;

export const App: React.FC = () => {
  const [isExpand, setIsExpand] = useState<boolean>(true);

  const sidebarItems = [
    "#27ae60",
    "#e74c3c",
    "#3498db",
    "#30336b",
    "#7bed9f",
  ].map((item, index) => (
    <Option key={index}>
      <FrameOptions bg={item} />
    </Option>
  ));

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <Sidebar expand={isExpand}>{sidebarItems}</Sidebar>
        <div className={styles.right}>
          <FrostedGlassFrame
            src={
              "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            }
          />
        </div>
      </div>
    </>
  );
};
