import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <p>Dashboard</p>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
