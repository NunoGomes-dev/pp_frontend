import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { Box, HStack, Menu } from "./components";
import { AuthContext } from "./context/AuthContext";
import Routes from "./Routes";
import { theme } from "./theme";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
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
