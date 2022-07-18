import { Box, HStack } from "../../Design";

const PageHeader = ({ title, unstyled = "unstyled", children }) => {
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
      <Box fontWeight="600" fontSize="3xl">
        {title}
      </Box>
      {children ? children : null}
    </HStack>
  );
};

export default PageHeader;
