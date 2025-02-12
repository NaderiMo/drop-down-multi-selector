import { FC, ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

const ListItem: FC<Props> = ({ children }) => {
  return <div className="listItem">{children}</div>;
};

export default ListItem;
