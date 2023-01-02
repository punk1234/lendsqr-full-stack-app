import NavBarMenuGroup from "../NavBarMenuGroup/NavBarMenuGroup";
import NavBarSubMenuItem from "../NavBarSubMenuItem/NavBarSubMenuItem";

import "./NavBar.css";

export function NavBar() {
  return (
    <div className="NavBar">
      <NavBarSubMenuItem
        title="Switch Organization"
        iconUrl="/images/icons/briefcase.svg"
      />

      <NavBarSubMenuItem
        title="Dashboard"
        iconUrl="/images/icons/home.svg"
      />

      <NavBarMenuGroup
        groupName="CUSTOMERS"
        subMenuItems={[
          { title: "Users", iconUrl: "/images/icons/user-friends.svg" },
          { title: "Guarantors", iconUrl: "/images/icons/users.svg" },
          { title: "Loans", iconUrl: "/images/icons/sack.svg" },
          { title: "Decision Models", iconUrl: "/images/icons/handshake-regular.svg" },
          { title: "Savings", iconUrl: "/images/icons/piggy-bank.svg" },
          { title: "Loan Requests", iconUrl: "/images/icons/loan-requests.svg" },
          { title: "Whitelist", iconUrl: "/images/icons/user-cog.svg" },
          { title: "Karma", iconUrl: "/images/icons/user-times.svg" }
        ]}
      />

      <NavBarMenuGroup
        groupName="BUSINESSES"
        subMenuItems={[
          { title: "Organization", iconUrl: "/images/icons/briefcase.svg" },
          { title: "Loan Products", iconUrl: "/images/icons/loan-requests.svg" },
          { title: "Savings Products", iconUrl: "/images/icons/savings-products.svg" },
          { title: "Fees and Charges", iconUrl: "/images/icons/coins-solid.svg" },
          { title: "Transactions", iconUrl: "/images/icons/transactions.svg" },
          { title: "Services", iconUrl: "/images/icons/galaxy.svg" },
          { title: "Service Account", iconUrl: "/images/icons/user-cog.svg" },
          { title: "Settlements", iconUrl: "/images/icons/scroll.svg" },
          { title: "Reports", iconUrl: "/images/icons/chart-bar.svg" }
        ]}
      />

      <NavBarMenuGroup
        groupName="SETTINGS"
        subMenuItems={[
          { title: "Preferences", iconUrl: "/images/icons/slider-h.svg" },
          { title: "Fees and pricing", iconUrl: "/images/icons/badge-percent.svg" },
          { title: "Audit Logså", iconUrl: "/images/icons/clipboard-list.svg" }
        ]}
      />
    </div>
  );
}