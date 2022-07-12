import { Flex } from "../styled";

const PageHeader = ({ name, children }) => {
  return (
    <Flex
      width="100%"
      height="73px"
      justifyContent="space-between"
      alignItems="center"
      color="#2D3748"
      padding="0 1.5rem"
      background="#FFFFFF"
      border="1px solid #EDF2F7"
      style={{ borderLeft: "0px", borderTop: "0px", borderRight: "0px" }}
    >
      <span style={{ fontWeight: 500, fontSize: "22px" }}>{name}</span>
      {children ? children : null}
    </Flex>
  );
};

export default PageHeader;
