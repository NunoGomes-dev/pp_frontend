import { HStack } from "../Design";

const PageHeader = ({ name, unstyled, children }) => {
  return (
    <HStack
      width="calc(100% - 3rem)"
      maxHeight="calc(100% - 1.5rem)"
      justify="space-between"
      align="center"
      color="#2D3748"
      padding="1.5rem"
      background={unstyled ? "transparent" : "#FFFFFF"}
      borderBottom={unstyled ? "none" : "1px solid #EDF2F7"}
    >
      <span style={{ fontWeight: 500, fontSize: "22px" }}>{name}</span>
      {children ? children : null}
    </HStack>
  );
};

export default PageHeader;
