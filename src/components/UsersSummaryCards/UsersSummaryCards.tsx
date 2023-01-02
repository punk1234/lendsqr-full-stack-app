import "./UsersSummaryCards.css";

export function UsersSummaryCards() {
  return (
    <div className="UsersSummaryCards">
      {/* CAN REFACTOR EACH ITEM AS A SINGLE COMPONENT OR BETTER STILL KEEP THE ITEMS IN AN ARRAY */}

      <div className="UsersSummaryCards__item">
        <img
          src={"/images/icons/users-summary-all.svg"}
          alt=""
        />

        <br />
        <span className="UsersSummaryCards__item_title">USERS</span>

        <br />
        <span className="UsersSummaryCards__item_stats_value">2,453</span>
      </div>

      <div className="UsersSummaryCards__item">
        <img
          src={"/images/icons/users-summary-active.svg"}
          alt=""
        />

        <br />
        <span className="UsersSummaryCards__item_title">ACTIVE USERS</span>

        <br />
        <span className="UsersSummaryCards__item_stats_value">2,453</span>
      </div>

      <div className="UsersSummaryCards__item">
        <img
          src={"/images/icons/users-summary-loan.svg"}
          alt=""
        />

        <br />
        <span className="UsersSummaryCards__item_title">USERS WITH LOANS</span>

        <br />
        <span className="UsersSummaryCards__item_stats_value">12,453</span>
      </div>

      <div className="UsersSummaryCards__item">
        <img
          src={"/images/icons/users-summary-savings.svg"}
          alt=""
        />

        <br />
        <span className="UsersSummaryCards__item_title">USERS WITH SAVINGS</span>

        <br />
        <span className="UsersSummaryCards__item_stats_value">102,453</span>
      </div>
    </div>
  );
}