import React from "react";

const UserProfilePage = () => {
  return <>
 
      <div className=" mx-auto bg-white dark:bg-slate-200 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">My Profile</h1>
        <div className="border-b mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-zinc-200 dark:bg-slate-300 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Contact detail</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value="Scaralet"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-lg shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value="Doe"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Phone number *
                  </label>
                  <input
                    type="text"
                    value="(333) 000 555"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Mobile number *
                  </label>
                  <input
                    type="text"
                    value="+91 9852 8855 252"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    value="example@homerealty.com"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Skype *
                  </label>
                  <input
                    type="text"
                    value="Scaralet D"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="bg-zinc-200 dark:bg-slate-300 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Upload your profile photo</h2>
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-zinc-300 dark:bg-zinc-600 rounded-full mb-4 flex items-center justify-center">
                <img src="https://placehold.co/100x100" alt="Profile Placeholder" />
              </div>
              <div className="flex space-x-4">
                <button className="bg-green-500 dark:bg-green-700 text-white py-2 px-4 rounded-md">
                  Upload
                </button>
                <button className="bg-red-500 dark:bg-red-700 text-white py-2 px-4 rounded-md">
                  Remove
                </button>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
                Note: Minimum size 300px x 300px
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-zinc-200 dark:bg-slate-300 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Social media detail</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Facebook *
                  </label>
                  <input
                    type="text"
                    value="http://www.facebook.com"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Twitter *
                  </label>
                  <input
                    type="text"
                    value="http://www.twitter.com"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Linkedin *
                  </label>
                  <input
                    type="text"
                    value="http://www.linkedin.com"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Instagram *
                  </label>
                  <input
                    type="text"
                    value="http://www.instagram.com"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="bg-zinc-200 dark:bg-slate-300 p-6 rounded-lg shadow-inner">
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Old password *
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    New password *
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    className="mt-1 block w-full border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  
  </>;
};

export default UserProfilePage;
