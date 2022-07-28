import { memo } from "react";
import { Box } from "../../Design";

const Overlay = ({ className, ...others }) => (
  <Box
    className={`fixed top-0 right-0 bottom-0 left-0 bg-black opacity-40 ${className}`}
    style={{ zIndex: 1000 }}
    {...others}
  />
);

export default memo(Overlay);
