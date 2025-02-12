import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLDivElement>) => {
    const newMessage = (e.target as HTMLDivElement).innerText;
    const trimmedMessage = newMessage?.trim() || "";
    setValue(trimmedMessage);
  };

  return { value, handleChange };
};

export default useInput;
