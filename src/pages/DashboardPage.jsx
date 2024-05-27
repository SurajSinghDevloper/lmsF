import React from "react";

const DashboardPage = () => {
  return (
    <>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="capacity icon"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Capacity</h2>
            <p className="text-2xl">105GB</p>
            <p className="text-sm text-zinc-500">Updated now</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="revenue icon"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Revenue</h2>
            <p className="text-2xl">$1,345</p>
            <p className="text-sm text-zinc-500">Last day</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="errors icon"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Errors</h2>
            <p className="text-2xl">23</p>
            <p className="text-sm text-zinc-500">In the last hour</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
          <img
            src="https://placehold.co/40x40"
            alt="followers icon"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Followers</h2>
            <p className="text-2xl">+45</p>
            <p className="text-sm text-zinc-500">Updated now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
