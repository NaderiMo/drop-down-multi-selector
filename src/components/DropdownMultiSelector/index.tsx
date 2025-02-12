import { FC } from "react";
import "./styles.scss";
import { Props } from "./types";

const DropdownMultiSelector: FC<Props> = ({ placeholder, width }) => {
  return (
    <div className="dropdown-multi-selector" style={{ width }}>
      <div className="input">{placeholder}</div>
    </div>
  );
};

export default DropdownMultiSelector;
