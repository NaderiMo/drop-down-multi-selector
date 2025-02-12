import { FC, useState } from "react";
import "./styles.scss";
import { ListItem, Props } from "./types";
import useInput from "../../hooks/useInput";
import defaultItems from "./defaultItems.json";

const DropdownMultiSelector: FC<Props> = ({ placeholder, width }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { value, handleChange } = useInput();

  return (
    <div className="dropdown-multi-selector" style={{ width }}>
      <div
        className="input"
        onInput={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        contentEditable
      >
        {value}
      </div>
      {isFocused && (
        <div className="listItems">
          {defaultItems?.map((item: ListItem, index) => (
            <div key={index} className="item">
              {item?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMultiSelector;
