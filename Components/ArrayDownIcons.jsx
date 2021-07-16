import { Icon, InlineIcon } from "@iconify/react";
import settingOutlined from "@iconify-icons/ant-design/setting-outlined";
import helpIcon from "@iconify-icons/carbon/help";
import logoutIcon from "@iconify-icons/fe/logout";

const ArrayDownIcons = [
  {
    classNani: "SettingIcon",
    icons: <Icon icon={settingOutlined} className="DownIcons" />
  },
  {
    classNani: "HelpIcon",
    icons: <Icon icon={helpIcon} className="DownIcons" />
  },
  {
    classNani: "LogoutIcon",
    icons: <Icon icon={logoutIcon} className="DownIcons" />
  }
];

export default ArrayDownIcons;
