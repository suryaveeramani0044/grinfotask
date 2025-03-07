import React from "react";

const Modal = ({ isOpen, title, content, children }) => {
  return (
    <div className="overlay">
      <section className="modal-header">{title}</section>

      {content}
      {children}
    </div>
  );
};

export default Modal;
