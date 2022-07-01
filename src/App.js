import { AuthProvider } from "./context/AuthContext";
import Routes from "./Routes";

function App() {
  return (
    <AuthProvider>
      <div
        style={{
          textAlign: "center",
          width: "100%",
          height: "100vh",
          background: "#FAFAFA",
        }}
      >
        <Routes />
      </div>
    </AuthProvider>
  );
}

export default App;
