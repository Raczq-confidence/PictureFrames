import { useState } from "react";
import { FrameOptions, Sidebar, TopBar } from "~/components";
import "./global.scss";

const { Option } = Sidebar;

export const App: React.FC = () => {
  const [isExpand, setIsExpand] = useState<boolean>(true);

  const sidebarItems = ["#27ae60", "#e74c3c", "#3498db"].map((item, index) => (
    <Option key={index}>
      <FrameOptions bg={item} />
    </Option>
  ));

  return (
    <div className="container">
      {/* <TopBar /> */}
      <Sidebar expand={isExpand}>{sidebarItems}</Sidebar>
    </div>
  );
};
