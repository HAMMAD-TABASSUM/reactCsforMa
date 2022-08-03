import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "../../components";

export const MainLayout = (): JSX.Element => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
