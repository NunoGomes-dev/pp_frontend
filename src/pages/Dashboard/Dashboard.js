import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { PageHeader } from "../../components";

const Dashboard = () => {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>
      <PageHeader name="Dashboard" />
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
