import exifr from "exifr";
import { createContext, useCallback, useState } from "react";

export interface IExInfo {
  FNumber: string;
  ExposureTime: string;
  ISO: string;
  FocalLength: string;
}

export interface IFilesContext {
  fileList: { file: File; exInfo: IExInfo }[];
  uploadFiles: (...files: File[]) => void;
}

export const DEFAULT_INFO = {
  FNumber: "F2.4",
  ExposureTime: "1/300s",
  ISO: "ISO100",
  FocalLength: "69 mm",
};

export const FilesContext = createContext<IFilesContext | null>(null);

export const FilesProvider = ({ children }) => {
  const [fileList, setFileList] = useState<IFilesContext["fileList"]>([]);

  const uploadFiles = useCallback(async (...files: File[]) => {
    let isShowTip = false;
    const exInfos = await Promise.all(files.map((f) => exifr.parse(f)));
    const infos = exInfos.map((info, index) => {
      const { FNumber, ExposureTime, ISO, FocalLength } = info;
      const {
        FNumber: DEFAULT_F_NUMBER,
        ExposureTime: DEFAULT_EXPOSURE_TIME,
        ISO: DEFAULT_ISO,
        FocalLength: DEFAULT_FOCAL_LENGTH,
      } = DEFAULT_INFO;

      if ([FNumber, ExposureTime, ISO, FocalLength].some((v) => !v)) {
        isShowTip = true;
      }

      return {
        file: files[index],
        exInfo: {
          FNumber: FNumber ?? DEFAULT_F_NUMBER,
          ExposureTime: ExposureTime ?? DEFAULT_EXPOSURE_TIME,
          ISO: ISO ?? DEFAULT_ISO,
          FocalLength: FocalLength ?? DEFAULT_FOCAL_LENGTH,
        },
      };
    });

    if (isShowTip) {
      // TODO: add show tips
    }

    setFileList([...fileList, ...infos]);
  }, []);

  return (
    <FilesContext.Provider value={{ fileList, uploadFiles }}>
      {children}
    </FilesContext.Provider>
  );
};
