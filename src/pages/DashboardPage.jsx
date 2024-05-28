import React from "react";
import { IoIosPeople } from "react-icons/io";

const DashboardPage = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
          <IoIosPeople size={50} color="blue"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Total Applied</h2>
            <p className="text-2xl">1005</p>
            <p className="text-sm text-zinc-500">Updated now</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
        <IoIosPeople size={50} color="green"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Total Selected</h2>
            <p className="text-2xl">845</p>
            <p className="text-sm text-zinc-500">Till Last day</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
        <IoIosPeople size={50} color="orange"
            className="mr-4"
          />
          <div>
            <h2 className="text-lg font-bold">Pending</h2>
            <p className="text-2xl">23</p>
            <p className="text-sm text-zinc-500">In the last hour</p>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-300 p-4 rounded shadow-md">
        <div className="flex items-center">
        <IoIosPeople size={50}
            className="mr-4" color="red"
          />
          <div>
            <h2 className="text-lg font-bold">Rejected</h2>
            <p className="text-2xl">+45</p>
            <p className="text-sm text-zinc-500">Updated now</p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default DashboardPage;
