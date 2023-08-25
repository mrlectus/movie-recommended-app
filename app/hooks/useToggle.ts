import { useState } from "react";

export const useToggle = (state: false) => {
  const [toggle, setToggle] = useState<boolean>(state);
  const doToggle = () => {
    setToggle((prev) => !prev);
  };

  return [toggle, doToggle] as const;
};
