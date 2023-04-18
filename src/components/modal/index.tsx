import React from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  active: boolean;
  link?: string;
  blockClickOnOverlay?: boolean;
}

const Modal = ({ children, active, link, blockClickOnOverlay }: Props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const closeModal = () => {
    !link ? navigate("/") : navigate(`${link}/${id}`);
  };

  if (!children) return null;
  return (
    <div className={`modal ${active && `is-active`}`}>
      <div
        className="modal-background"
        onClick={blockClickOnOverlay ? undefined : closeModal}
      ></div>
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
