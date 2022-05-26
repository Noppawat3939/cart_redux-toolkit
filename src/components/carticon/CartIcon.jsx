import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";

const CartIcon = () => {
  return (
    <div
      style={{
        fontSize: "2em",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <HiOutlineShoppingBag />
    </div>
  );
};

export default CartIcon;
