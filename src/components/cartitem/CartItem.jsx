import React from "react";
import { useDispatch } from "react-redux";
import "../../styles/cartitem/CartItem.css";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../../features/cart/cartSlice";

const CartItem = ({ ...item }) => {
  const { amount, img, price, title, id } = item;

  const dispatch = useDispatch();

  return (
    <article>
      <div className="cart-left">
        <img src={img} alt={title} />
        <div className="info">
          <span>
            <h3>{title}</h3>
            <p>${price}</p>
          </span>
          <button onClick={() => dispatch(removeItem(id))}>Remove</button>
        </div>
      </div>
      <div className="cart-right">
        <button onClick={() => dispatch(increaseItem({ id }))}>+</button>
        <p>{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseItem({ id }));
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
