import { INavBarSubMenuItem } from "../../interfaces";
import NavBarSubMenuItem from "../NavBarSubMenuItem/NavBarSubMenuItem";
import "./NavBarMenuGroup.css";

interface IProps {
  groupName: string;
  subMenuItems: Array<INavBarSubMenuItem>
}

function NavBarMenuGroup(props: IProps) {
  return (
    <div className="NavBarMenuGroup">
      <span className="NavBarMenuGroup__title">{ props.groupName }</span>

      {
        props.subMenuItems.map((item: INavBarSubMenuItem) =>
          <NavBarSubMenuItem
            title={item.title}
            iconUrl={item.iconUrl}
          />
        )
      }
    </div>
  );
}

export default NavBarMenuGroup;