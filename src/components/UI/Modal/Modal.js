import { createPortal } from "react-dom";

const Modal = ({ children, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(children, document.getElementById("portal"));
};

export default Modal;
