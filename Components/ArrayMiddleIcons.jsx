import { Icon, InlineIcon } from "@iconify/react";
import roundDashboardCustomize from "@iconify-icons/ic/round-dashboard-customize";
import bxUserCircle from "@iconify-icons/bx/bx-user-circle";
import userGroup from "@iconify-icons/majesticons/user-group";

const ArrayMiddleIcons = [
  {
    key: 1,
    classNani: "DashboardIcon",
    icons: <Icon icon={roundDashboardCustomize} className="MiddleIcons" />
  },
  {
    key: 2,
    classNani: "UserIcon",
    icons: <Icon icon={bxUserCircle} className="MiddleIcons" />
  },
  {
    key: 3,
    classNani: "MasterIcon",
    icons: <Icon icon={userGroup} className="MiddleIcons" />
  }
];

export default ArrayMiddleIcons;
