import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import Image from "next/image";
import {
  MdComputer,
  MdContactPhone,
  MdOutlineFolder,
} from "react-icons/md"
import{ LuMailOpen }from "react-icons/lu";
import { CgListTree } from "react-icons/cg";
import { FaRegChartBar, FaWallet } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa6";

const menuItems = [
  {
    title: " ",
    list: [
      {
        title: "Dashboard",
        path: "/ratifymail/logged-in/dashboard",
        icon: <MdComputer />,
      },
    ],
  },
  {
    title: "VERIFICATION",
    list: [
      {
        title: "Bulk Validation",
        path: "/ratifymail/logged-in/bulk-validation",
        icon: <MdOutlineFolder/>,
      },
      {
        title: "Single Validation",
        path: "/ratifymail/logged-in/single-validation",
        icon: <LuMailOpen />,
      },
      {
        title: "API",
        path: "/ratifymail/logged-in/api",
        icon: <CgListTree />,
      },
    ],
  },
  {
    title: "STATS",
    list: [
      {
        title: "Statistics",
        path: "/ratifymail/logged-in/statistics",
        icon: <FaRegChartBar />,
      },
    ],
  },
  {
    title: "BILLING",
    list: [
      {
        title: "Plans & Upgrade",
        path: "/ratifymail/logged-in/plans",
        icon: <FaRegFolderOpen/>,
      },
      {
        title: "Payments",
        path: "/ratifymail/logged-in/payments",
        icon: <FaWallet />,
      },
    ],
  },
  {
    title: "LISTS",
    list: [
      {
        title: "Contact List",
        path: "/ratifymail/logged-in/contact-list",
        icon: <MdContactPhone
         />,
      },
      {
        title: "Docs",
        path: "/ratifymail/logged-in/dashboard",
        icon: <MdContactPhone
         />,
      },
    ],
  },
];

const Sidebar = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>Bhoomi Panchal</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
          <span className={`${styles.cat} ${styles.title}`}>{cat.title}</span>
          {cat.list.map((item) => (
            <MenuLink item={item} key={item.title} />
          ))}
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
