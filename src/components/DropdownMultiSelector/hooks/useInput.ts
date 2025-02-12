import { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Item } from "../types";

const useInput = () => {
  const [value, setValue] = useState<string>("");
  const [customItems, setCustomItems] = useState<Item[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      const newItem = { id: uuidV4(), value };
      setCustomItems([...customItems, newItem]);
    }
  };

  return { value, handleChange, customItems, handleKeyDown };
};

export default useInput;
