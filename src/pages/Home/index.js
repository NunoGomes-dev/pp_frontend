import { Box, Button, HStack, Image, VStack } from "../../components";
import logo from "../../assets/pp_logo.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box
      top="0"
      right="0"
      left="0"
      bottom="0"
      width="100vw"
      height="100vh"
      zIndex={1000}
      background="primary"
    >
      <VStack width="full" height="full" justify="center" align="center">
        <Image alt="Peça a Peça" src={logo} height="40%" />
        <HStack gap="2rem">
          <Link to={"/signin"} style={{ textDecoration: "none" }}>
            <Button variant="outline2">Iniciar sessão</Button>
          </Link>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <Button variant="outline2">Registar</Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};
