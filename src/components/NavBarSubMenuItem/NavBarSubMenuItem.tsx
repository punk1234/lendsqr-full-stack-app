import { INavBarSubMenuItem } from "../../interfaces";
import "./NavBarSubMenuItem.css";

function NavBarSubMenuItem(props: INavBarSubMenuItem) {
  return (
    <div className="NavBarSubMenuItem">
      <img src={props.iconUrl} />
      &nbsp;
      <span className="NavBarSubMenuItem__title">{props.title}</span>
    </div>
  );
}

export default NavBarSubMenuItem;