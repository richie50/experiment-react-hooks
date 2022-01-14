import "./styles.scss";

import Box from "../box/Box";
import GButton from "../button/Button";
import PropTypes from "prop-types";
import React from "react";

function GroceryItem({ id, price, productName, OnGroceryButtonEvent }) {
  const addItem = (e) => {
    console.log(id, price, productName);
    OnGroceryButtonEvent({ type: "ADD", id, price, productName });
  };
  return (
    <li className="grocery-item__list">
      <Box className="grocery">
        <h3 className="price">$ {price}</h3>
        <GButton clickHandler={addItem}>Add {productName}</GButton>
      </Box>
    </li>
  );
}

GroceryItem.propTypes = {
  OnGroceryButtonEvent: PropTypes.func,
  id: PropTypes.number,
  price: PropTypes.number,
  productName: PropTypes.string,
};

export default GroceryItem;
