import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Box, HStack, LoadingScreen, Menu } from "./components";
import { AuthContext } from "./context/AuthContext";
import Routes from "./Routes";
import { theme } from "./theme";
import logo from "./assets/pp_logo.png";

function App() {
  const { isAuthenticated, firstLoading } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <LoadingScreen show={firstLoading} logo={logo} />
      <Box
        height="100vh"
        overflow="hidden"
        position="relative"
        background="#fafafa"
      >
        <HStack width="full" height="full" gap="0" background="#fafafa">
          {isAuthenticated && <Menu />}
          <Box
            flex="1"
            background="#fafafa"
            overflowY="auto"
            width="full"
            height="full"
          >
            <Routes />
          </Box>
        </HStack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
