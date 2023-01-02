import React from "react";
import { AppLogo } from "../AppLogo/AppLogo";

import "./Header.css";

const DEFAULT_AVATAR_IMAGE_URL = "/images/default-avatar.png";
const NOTIFICATION_ICON_URL = "/images/icons/notification-bell.svg";
const DROPDOWN_TRIANGLE_ICON_URL = "/images/icons/drop-down-triangle.svg";

export function Header() {
  return (
    <div className="Header">
      <AppLogo size={115} />

      <input
        type="text"
        placeholder="Search for anything"
      />

      <span>
        <a href="">Docs</a>
      </span>

      <img
        src={NOTIFICATION_ICON_URL}
        alt="Notifications"
      />

      {/* NOTE: CHANGE BACK TO `span` */}
      <div className="Header__user_profile">
        <img src={DEFAULT_AVATAR_IMAGE_URL} />
        Adedeji
        <img src={DROPDOWN_TRIANGLE_ICON_URL} />
      </div>
    </div>
  );
}