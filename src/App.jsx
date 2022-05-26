import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "../src/App.css";
import CartItems from "./components/cartitems/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { calcTotals } from "./features/cart/cartSlice";
import Modal from "./components/modal/Modal";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcTotals());
  }, [cartItems]);

  return (
    <main>
      <Navbar />
      <CartItems />
      {isOpen && <Modal />}
    </main>
  );
}

export default App;
