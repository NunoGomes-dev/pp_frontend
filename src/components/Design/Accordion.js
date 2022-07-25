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
    <div
      ref={wrapperRef}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        gap: "1rem",
      }}
    >
      <HStack
        width="full"
        justify="start"
        align="end"
        onClick={() => setIsOpen(!isOpen)}
        cursor="pointer"
        color="secondary"
        {...titleProps}
      >
        <MdOutlineKeyboardArrowRight
          style={{
            transform: `rotate(${isOpen ? "90deg" : "0deg"})`,
            transition: "transform 0.3s ease-in-out",
            fontSize: "20px",
          }}
        />
        <Box fontSize="xl" color="black">
          {title}
        </Box>
      </HStack>
      <div
        style={{
          background: "#FAFAFA",
          maxHeight: `${isOpen ? height : "0px"}`,
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
          ...containerProps,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
