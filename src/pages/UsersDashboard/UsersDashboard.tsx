import { Header, NavBar } from "../../components";
import "./UsersDashboard.css";

function UsersDashboardPage() {
  return (
    <div className="UsersDashboardPage">
      <Header />
      
      <div className="UsersDashboardPage__main">
        <NavBar />
      </div>
    </div>
  );
}

export default UsersDashboardPage;