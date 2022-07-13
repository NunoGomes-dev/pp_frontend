import { Link } from "react-router-dom";
import { HStack } from "../../Design";

const LinkItem = ({ isActive, LeftIcon, text, to }) => {
  const background = isActive ? "#DDBA92" : "white";
  const color = isActive ? "white" : "#4A5568";
  return (
    <Link to={to} style={{ textDecoration: "none", width: "100%" }}>
      <HStack
        align="center"
        padding="0.5rem"
        gap="0.5rem"
        borderRadius="4px"
        background={background}
        color={color}
      >
        {LeftIcon ? LeftIcon : null}
        <div>{text}</div>
      </HStack>
    </Link>
  );
};

export default LinkItem;
