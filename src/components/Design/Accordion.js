import { useRef } from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import useOutsideClick from "../../hooks/others/useOutsideClick";
import Box from "./Box";
import HStack from "./HStack";

const Accordion = ({
  children,
  title,
  height = "10rem",
  titleProps,
  containerProps,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, isOpen, () => setIsOpen(false));

  return (
    <div ref={wrapperRef} className="w-full flex flex-col justify-start gap-4">
      <HStack
        className={`w-full items-center cursor-pointer text-secondary px-2 gap-2 ${titleProps}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MdOutlineKeyboardArrowRight
          style={{
            transform: `rotate(${isOpen ? "90deg" : "0deg"})`,
            transition: "transform 0.3s ease-in-out",
            fontSize: "20px",
          }}
        />
        <Box className="text-black text-xl">{title}</Box>
      </HStack>
      <div
        className={`bg-light overflow-hidden transition-all duration-300 ease-in-out ${containerProps}`}
        style={{
          maxHeight: `${isOpen ? height : "0px"}`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
