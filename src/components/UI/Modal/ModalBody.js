import { memo } from "react";
import { Box } from "../../Design";

const ModalBody = ({ children, ...rest }) => <Box {...rest}>{children}</Box>;

export default memo(ModalBody);
