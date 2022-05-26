import React from "react";
import { RiHandbagLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../cartitem/CartItem";
import "../../styles/cartitems/CartItems.css";
import { clearCart } from "../../features/cart/cartSlice";
import { openModal } from "../../features/modal/modalSlice";

const CartItems = () => {
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>
        your cart <RiHandbagLine />
      </h2>
      {amount > 0 ? (
        <div className="cartItems-content">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="cartItems-content">
          <p>is currently empty</p>
        </div>
      )}
      <footer>
        <h3>total ${total}</h3>
        <button onClick={() => dispatch(openModal())}>clear cart</button>
      </footer>
    </div>
  );
};

export default CartItems;
