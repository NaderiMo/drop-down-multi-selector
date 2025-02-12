import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DropdownMultiSelector from "./components/DropdownMultiSelector";
import "./themes/default.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DropdownMultiSelector placeholder={"enter"} width={300} />
  </StrictMode>
);
