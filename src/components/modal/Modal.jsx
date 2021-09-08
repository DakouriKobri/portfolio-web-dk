import React from "react";
import ReactDom from "react-dom";
import "./modal.scss";

export default function Modal({ isOpen, children }) {
  if (!isOpen) return null;

  return ReactDom.createPortal(
    <div className="modal-background">
      <div className="modal-container">{children}</div>
    </div>,
    document.getElementById("portal")
  );
}
