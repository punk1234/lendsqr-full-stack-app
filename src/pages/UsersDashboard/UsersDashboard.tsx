import { Header, MainUsersDashboard, NavBar } from "../../components";
import "./UsersDashboard.css";

function UsersDashboardPage() {
  return (
    <div className="UsersDashboardPage">
      <Header />
      
      <div className="UsersDashboardPage__main">
        <NavBar />
        <MainUsersDashboard />
      </div>
    </div>
  );
}

export default UsersDashboardPage;