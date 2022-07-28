import { Box, Button, HStack, Image, VStack } from "../../components";
import logo from "../../assets/pp_logo.png";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box
      className={"top-0 right-0 left-0 bottom-0 w-screen h-screen bg-primary"}
      style={{ zIndex: 1000 }}
    >
      <VStack className="w-full h-full justify-center items-center">
        <Image alt="Peça a Peça" src={logo} className="h-[40%]" />
        <HStack className={"gap-8"}>
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
