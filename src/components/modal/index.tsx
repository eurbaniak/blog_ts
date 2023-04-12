import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  active: boolean;
}

const Modal = ({ children, active }: Props) => {
  const navigate = useNavigate();
  const closeModal = () => {
    navigate("/");
  };
  if (!children) return null;
  return (
    <div className={`modal ${active && `is-active`}`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">{children}</div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>
  );
};

export default Modal;
