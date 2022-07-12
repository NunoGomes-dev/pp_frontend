import { useContext } from "react";
import styled from "styled-components";
import { Flex, Menu } from "./components";
import { AuthContext } from "./context/AuthContext";
import Routes from "./Routes";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AppContainer>
      <Flex width="100%" height="100%">
        {isAuthenticated && <Menu />}
        <RoutesContainer>
          <Routes />
        </RoutesContainer>
      </Flex>
    </AppContainer>
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
