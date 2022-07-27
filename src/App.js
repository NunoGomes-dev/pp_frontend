import { Box, HStack, LoadingScreen, Menu, ToastContainer } from "./components";
import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { NotificationsProvider } from "./context/NotificationsContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NotificationsProvider>
        <AuthProvider>
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
        </AuthProvider>
      </NotificationsProvider>
    </QueryClientProvider>
  );
}

export default App;
