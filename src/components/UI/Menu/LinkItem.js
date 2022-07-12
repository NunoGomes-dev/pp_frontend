import { Link } from "react-router-dom";
import { Flex } from "../../styled";

const LinkItem = ({ isActive, LeftIcon, text, to }) => {
  const background = isActive ? "#2978A0" : "white";
  const color = isActive ? "white" : "#4A5568";
  return (
    <Link to={to} style={{ textDecoration: "none", width: "100%" }}>
      <Flex
        width="100%"
        flexDirection="row"
        justifyContent="start"
        alignItems="center"
        padding="0.5rem"
        gap="0.5rem"
        borderRadius="4px"
        background={background}
        color={color}
      >
        {LeftIcon ? LeftIcon : null}
        <div>{text}</div>
      </Flex>
    </Link>
  );
};

export default LinkItem;
