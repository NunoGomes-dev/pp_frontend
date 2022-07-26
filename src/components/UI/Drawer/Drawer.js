import { useRef } from "react";
import useOutsideClick from "../../../hooks/others/useOutsideClick";

const Drawer = ({ isOpen = false, children, closeDrawer }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, isOpen, closeDrawer);

  return (
    <div
      style={{
        height: "100%",
        width: "22rem",
        position: "fixed",
        padding: "1rem 0",
        background: "white",
        top: 0,
        right: 0,
        transform: `translateX(${isOpen ? "0px" : "22rem"})`,
        transition: "all 0.5s",
        borderLeft: "1px solid #E0E0E0",
        zIndex: 1000,
      }}
      ref={wrapperRef}
    >
      {children}
    </div>
  );
};

export default Drawer;
