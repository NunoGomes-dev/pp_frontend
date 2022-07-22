import { ThemeProvider } from "styled-components";
import { Box, HStack, LoadingScreen, Menu, ToastContainer } from "./components";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationsProvider } from "./context/NotificationsContext";

function App() {
  const queryClient = new QueryClient();
  // const { isAuthenticated, firstLoading } = useContext(AuthContext);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <NotificationsProvider>
          <ThemeProvider theme={theme}>
            <LoadingScreen />
            <Box
              height="100vh"
              overflow="hidden"
              position="relative"
              background="#fafafa"
            >
              <HStack
                width="full"
                height="full"
                gap="0"
                background="#fafafa"
                position="relative"
              >
                <Menu />
                <Box
                  flex="1"
                  background="#fafafa"
                  overflowY="auto"
                  width="full"
                  height="full"
                  position="relative"
                >
                  <Routes />
                  <ToastContainer />
                </Box>
              </HStack>
            </Box>
          </ThemeProvider>
        </NotificationsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
