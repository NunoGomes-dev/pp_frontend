import { memo, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { Box, Image, Stack } from "../../Design";
import logo from "../../../assets/pp_logo.png";

const LoadingScreen = () => {
  const { firstLoading } = useContext(AuthContext);

  return (
    <Box
      className={`fixed top-0 right-0 left-0 bottom-0 w-screen h-screen z-50 bg-primary ${
        firstLoading ? "opacity-100" : "opacity-0"
      } pointer-events-none transition-all duration-500`}
    >
      <Stack className={"h-full w-full justify-center items-center"}>
        <Image alt="Peça a Peça" src={logo} className={"h-1/2"} />
      </Stack>
    </Box>
  );
};
export default memo(LoadingScreen);
