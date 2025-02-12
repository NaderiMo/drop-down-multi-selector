import { FC, useState } from "react";
import "./styles.scss";
import { Props } from "./types";

const DropdownMultiSelector: FC<Props> = ({ placeholder, width }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const newMessage = (e.target as HTMLDivElement).innerText;
    const trimmedMessage = newMessage?.trim() || "";
    setValue(trimmedMessage);
  };
  return (
    <div className="dropdown-multi-selector" style={{ width }}>
      <div
        className="input"
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        contentEditable
      >
        {/* {placeholder} */}
      </div>
      {isFocused && <div>List Items</div>}
      {/* {value} */}
    </div>
  );
};

export default DropdownMultiSelector;
