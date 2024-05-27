import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-zinc-200">
      <SideBar />
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span>Stats</span>
            <span>5 Notifications</span>
            <span>Settings</span>
          </div>
        </header>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default MainLayout;
