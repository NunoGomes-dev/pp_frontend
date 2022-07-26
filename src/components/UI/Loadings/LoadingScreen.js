import { memo, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Box, Image, Stack } from "../../Design";
import logo from "../../../assets/pp_logo.png";

const LoadingScreen = () => {
  const { firstLoading } = useContext(AuthContext);

  return (
    <Box
      position="fixed"
      top="0"
      right="0"
      left="0"
      bottom="0"
      width="100vw"
      height="100vh"
      zIndex={1000}
      background="#DDBA92"
      opacity={firstLoading ? 1 : 0}
      pointerEvents="none"
      style={{ transition: "all 0.5s" }}
    >
      <Stack width="full" height="full" justify="center" align="center">
        <Image alt="Peça a Peça" src={logo} height="50%" />
      </Stack>
    </Box>
  );
};
export default memo(LoadingScreen);
