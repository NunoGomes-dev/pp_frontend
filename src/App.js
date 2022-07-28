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
          <Box className={"overflow-hidden h-screen relative bg-light"}>
            <HStack className={"w-full h-full bg-light gap-0 relative"}>
              <Menu />
              <Box
                className={
                  "flex-1 bg-light overflow-y-auto w-full h-full relative"
                }
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
