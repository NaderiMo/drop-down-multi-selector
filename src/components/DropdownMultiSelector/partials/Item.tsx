import { FC } from "react";
import { Item as ItemType } from "../types";

interface Props {
  item: ItemType;
  onClick?: () => void;
  isSelected?: boolean;
}

const Item: FC<Props> = ({ item, isSelected, onClick }) => {
  return (
    <div key={item.id} className="item" onClick={() => onClick && onClick()}>
      {item.value}
      {isSelected && <span className="endItem">✔️</span>}
    </div>
  );
};

export default Item;
