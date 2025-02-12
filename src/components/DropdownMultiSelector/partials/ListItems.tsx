import { FC, ReactNode } from "react";
import { motion } from "motion/react";

export interface Props {
  children: ReactNode;
}

const ListItem: FC<Props> = ({ children }) => {
  const transition = {
    duration: 0.8,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <motion.div
      animate={{ y: 16 }}
      transition={transition}
      className="listItem"
    >
      <div className="container">{children}</div>
    </motion.div>
  );
};

export default ListItem;
