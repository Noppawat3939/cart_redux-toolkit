import React from "react";
import "../../styles/modal/Modal.css";
import { clearCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button onClick={() => dispatch(closeModal())}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
