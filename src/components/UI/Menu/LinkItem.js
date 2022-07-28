import { memo } from "react";
import { Link } from "react-router-dom";
import { HStack } from "../../Design";

const LinkItem = ({ isActive, LeftIcon, text, to, disabled = false }) => {
  const background = isActive ? "primary" : "white";
  const color = isActive ? "white" : "[#4A5568]";
  return (
    <Link
      to={disabled ? "#" : to}
      style={{
        textDecoration: "none",
        width: "100%",
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <HStack
        className={`text-${color} bg-${background} rounded-md p-2 gap-2 items-center`}
      >
        {LeftIcon ? LeftIcon : null}
        <div>{text}</div>
      </HStack>
    </Link>
  );
};

export default memo(LinkItem);
