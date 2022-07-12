import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Flex, Menu } from "./components";
import { AuthContext } from "./context/AuthContext";
import Routes from "./Routes";
import { theme } from "./theme";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Flex width="100%" height="100%">
          {isAuthenticated && <Menu />}
          <RoutesContainer>
            <Routes />
          </RoutesContainer>
        </Flex>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
  background-color: #fafafa;
`;

const RoutesContainer = styled.div`
  flex: 1;
  background: #fafafa;
  overflowy: auto;
  width: 100%;
  height: 100%;
`;

//TODOS

//CSS RESET (https://necolas.github.io/normalize.css/)
//Design system - material ui/ braid
