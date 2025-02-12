import { useState } from "react";
import { Item } from "../types";

const useSelectedItems = () => {
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const handleClickItem = (incomingItem: Item) => {
    setSelectedItems((prev) => {
      const isExists: boolean = prev.some(
        (item) => item.id === incomingItem.id
      );
      if (isExists) return prev.filter((item) => item.id !== incomingItem.id);
      else return [...prev, incomingItem];
    });
  };

  const checkIsSelected = (id: string) => {
    return selectedItems.some((item) => item.id === id);
  };

  return { handleClickItem, checkIsSelected, selectedItems };
};

export default useSelectedItems;
