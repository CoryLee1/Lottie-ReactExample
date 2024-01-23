import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState([
    {
      name: "文档",
      path: "/",
    },
    {
      name: "教程",
      path: "/jiaocheng",
    },
    {
      name: "博客",
      path: "/boke",
    },
    {
      name: "社区",
      path: "/shequ",
    },
  ]);
  const [selectMenu, setSelectMenu] = useState(menus[0]);

  useEffect(() => {}, []);

  const jump = (item) => {
    setSelectMenu(item);
    navigate(item.path);
  };

  return (
    <div className={styles.container}>
        <Outlet></Outlet>
    </div>
  );
}
