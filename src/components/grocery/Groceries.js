import "./styles.scss";

import GroceryItem from "../ui/grocery-list/GroceryItem";
import PropTypes from "prop-types";
import React from "react";
import useList from "../../hooks/use-list";

function Groceries({ listItems }) {
  const { addItem, removeItem } = useList(listItems);

  const handleGroceryItem = (dto) => {
    console.log(dto);
    const { type, ...rest } = dto;

    console.log(rest);

    if (type === "ADD") {
      addItem(rest);
    }
  };

  // use a hook to internally update this list , by keeping the original where ever it came from
  return (
    <ul className="grocery-items">
      {listItems?.map((groceries, idx) => (
        <GroceryItem
          key={groceries.id ?? idx}
          {...groceries}
          OnGroceryButtonEvent={handleGroceryItem}
        />
      ))}
    </ul>
  );
}

Groceries.propTypes = {
  listItems: PropTypes.array,
};

export default Groceries;
