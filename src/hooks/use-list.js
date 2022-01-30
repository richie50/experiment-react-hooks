import { useState } from "react";

function useList(init) {
  const [list, setList] = useState();

  return {
    list,
    addItem: (item) => {
      setList((prevList) => [...prevList, item]);
    },
    removeItem: (item) => {
      const copiedList = [...list];
      setList((prev) => {
        return copiedList.filter((product) => product.id !== item.id);
      });
    },
  };
}

export default useList;
