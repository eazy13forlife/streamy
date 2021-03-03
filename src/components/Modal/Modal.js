import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ header, content, actions, onDismiss }) => {
  return ReactDOM.createPortal(
    <div className="modal-container" onClick={onDismiss}>
      <div
        className="modal-thing"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h2>{header}</h2>
        <p>{content}</p>
        {actions()}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
export default Modal;
