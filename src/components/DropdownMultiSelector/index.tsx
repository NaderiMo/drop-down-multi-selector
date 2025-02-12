import { FC, useEffect, useState } from "react";
import useClickOutside from "./hooks/useClickOutside";
import useInput from "./hooks/useInput";
import useSelectedItems from "./hooks/useSelectedItems";
import defaultItems from "./mockData/defaultItems.json";
import Item from "./partials/Item";
import ListItem from "./partials/ListItems";
import "./styles.scss";
import { Item as ItemType } from "./types";
interface Props {
  placeholder?: string;
  width?: number;
  onChange?: (selectedItems: ItemType[]) => void;
}

const DropdownMultiSelector: FC<Props> = ({ placeholder, width, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { value, handleChange, handleKeyDown, customItems } = useInput();
  const dropdownRef = useClickOutside(() => setIsFocused(false));
  const { checkIsSelected, selectedItems, handleClickItem } =
    useSelectedItems();

  useEffect(() => {
    onChange && onChange(selectedItems);
  }, [selectedItems]);

  return (
    <div
      className="dropdown-multi-selector"
      style={{ width }}
      ref={dropdownRef}
    >
      <input
        placeholder={placeholder}
        className="input"
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onKeyDown={handleKeyDown}
        contentEditable
        value={value}
      />

      {isFocused && (
        <ListItem>
          {[...customItems, ...defaultItems]?.map((item: ItemType) => (
            <Item
              item={item}
              onClick={() => handleClickItem(item)}
              isSelected={checkIsSelected(item.id)}
            />
          ))}
        </ListItem>
      )}
    </div>
  );
};

export default DropdownMultiSelector;
