import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { FilesProvider } from "~/providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FilesProvider>
      <App />
    </FilesProvider>
  </StrictMode>
);
