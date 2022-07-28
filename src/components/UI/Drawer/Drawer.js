import { useRef } from "react";
import useOutsideClick from "../../../hooks/others/useOutsideClick";

const Drawer = ({ isOpen = false, children, closeDrawer }) => {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, isOpen, closeDrawer);

  return (
    <div
      className="h-full w-[22rem] fixed py-4 px-0 bg-white top-0 right-0 transition-all duration-500 border-l border-solid border-[#e0e0e0]"
      style={{
        transform: `translateX(${isOpen ? "0px" : "22rem"})`,
        zIndex: 1000,
      }}
      ref={wrapperRef}
    >
      {children}
    </div>
  );
};

export default Drawer;
