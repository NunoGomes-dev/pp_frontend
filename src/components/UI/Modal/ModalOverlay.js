import { Box } from "../../Design";

const Overlay = (props) => (
  <Box
    position="fixed"
    top="0"
    right="0"
    left="0"
    bottom="0"
    zIndex={1000}
    background="black"
    opacity="0.4"
    {...props}
  />
);

export default Overlay;
