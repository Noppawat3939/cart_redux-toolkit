import React from "react";
import "../../styles/loading/Loading.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
  return (
    <div className="loading">
      <h1>Loading</h1>
      <div className="loading-icon">
        <AiOutlineLoading3Quarters />
      </div>
    </div>
  );
}

export default Loading;
