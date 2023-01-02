import { UsersSummaryCards } from "../UsersSummaryCards/UsersSummaryCards";
import "./MainUsersDashboard.css";

export function MainUsersDashboard() {
  return (
    <div className="MainUsersDashboard">
      <span className="MainUsersDashboard__title">Users</span>

      <UsersSummaryCards />
    </div>
  );
}