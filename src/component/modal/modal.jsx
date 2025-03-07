import React from "react";
import "./modal.css";
const Modal = ({ isOpen, name, title, content, children, setOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="overlay">
          <div className="modal-box">
            <section className="modal-header">
              <h3>{title}</h3>
              <button onClick={() => setOpen(false)} className="close">
                close
              </button>
            </section>

            <p className="modal-content">{content}</p>
            {children}
          </div>
        </div>
      )}
      <button className="modal-name" onClick={() => setOpen(true)}>
        {" "}
        {name}
      </button>
    </>
  );
};

export default Modal;
