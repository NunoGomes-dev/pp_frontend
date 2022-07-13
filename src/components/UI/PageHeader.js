import { HStack } from "../Design";

const PageHeader = ({ name, children }) => {
  return (
    <HStack
      width="calc(100% - 3rem)"
      height="73px"
      justify="space-between"
      align="center"
      color="#2D3748"
      paddingLeft="1.5rem"
      paddingRight="1.5rem"
      background="#FFFFFF"
      border="1px solid #EDF2F7"
      style={{ borderLeft: "0px", borderTop: "0px", borderRight: "0px" }}
    >
      <span style={{ fontWeight: 500, fontSize: "22px" }}>{name}</span>
      {children ? children : null}
    </HStack>
  );
};

export default PageHeader;
