import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DropdownMultiSelector from "./components/DropdownMultiSelector";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DropdownMultiSelector />
  </StrictMode>
);
