import React from "react";
import { Menu, Tooltip } from "antd";
import { AppstoreOutlined, SettingOutlined } from "@ant-design/icons";

const items = [
  {
    label: "File",
    key: "file",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Edit",
    key: "edit",
    icon: <SettingOutlined />,
  },
  {
    label: "View",
    key: "view",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Help",
    key: "help",
    icon: <SettingOutlined />,
  },
];

export const TopBar: React.FC = () => {
  return <Menu mode="horizontal" items={items} />;
};
