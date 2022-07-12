import styled from "styled-components";
import { Flex, Menu } from "./components";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";

function App() {
  return (
    <AuthProvider>
      <AppContainer>
        <Flex width="100%" height="100%">
          <Menu />
          <RoutesContainer>
            <Routes />
          </RoutesContainer>
        </Flex>
      </AppContainer>
    </AuthProvider>
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
`;
