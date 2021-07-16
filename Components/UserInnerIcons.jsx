import { Icon, InlineIcon } from "@iconify/react";
import userOutlined from "@iconify-icons/ant-design/user-outlined";
import usersFourLight from "@iconify-icons/ph/users-four-light";
import reportAnalytics from "@iconify-icons/tabler/report-analytics";
import passwordIcon from "@iconify-icons/carbon/password";
import bxReset from "@iconify-icons/bx/bx-reset";

const UserInnerIcons = [
  {
    id: 1,

    classNani: "Usermastericon",
    icons: <Icon icon={userOutlined} className="userinnericons" />,
    iconsname: <span>User Master</span>,
    i:"i1",
    iconsclassname:"InnerIconsName1"
  },
  {
    id: 2,
    classNani: "Usergroupicon",
    icons: <Icon icon={usersFourLight} className="userinnericons" />,
    iconsname: <span>User Group</span>,
    i:"i2",
    iconsclassname:"InnerIconsName2"
  },
  {
    id: 3,
    classNani: "Userlogicon",
    icons: <Icon icon={reportAnalytics} className="userinnericons" />,
    iconsname: <span>User Logreport</span>,
    i:"i3",
    iconsclassname:"InnerIconsName3"
  },
  {
    id: 4,
    classNani: "Changepasswordicon",
    icons: <Icon icon={passwordIcon} className="userinnericons" />,
    iconsname: <span>Change Password</span>,
    i:"i4",
    iconsclassname:"InnerIconsName4"

  },
  {
    id: 5,
    classNani: "Resetpasswordicon",
    icons: <Icon icon={bxReset} className="userinnericons" />,
    iconsname: <span>Reset Password</span>,
    i:"i5",
    iconsclassname:"InnerIconsName5"
  }
];

export default UserInnerIcons;
