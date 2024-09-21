import { useContext } from "react";
import { FilesContext } from "~/providers";

export const useFileList = () => {
  const context = useContext(FilesContext);

  if (!context) {
    throw new Error("useFileList must be used within a FilesProvider");
  }

  return context;
};
