"use client";
import React, { useState } from "react";
import {
  IconSearch,
  IconBell,
  IconMenu,
  IconUser,
  IconUserCircle,
} from "@tabler/icons-react";
function Header() {
  const [isOpen, setisOpen] = useState(false);

  const handleIsOpen = () => {
    setisOpen(!isOpen);
  };
  return (
    <header className="relative top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-[#161a27] border-b text-sm py-2.5 sm:py-4 lg:ps-64 dark:bg-[#131722] dark:border-[#24283b]">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="me-5 lg:me-0 lg:hidden">
          <a
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="../templates/admin/index.html"
            aria-label="Preline"
          ></a>
        </div>

        <div className="w-full flex items-center justify-end ms-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <div className="md:hidden">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            >
              <IconMenu />
            </button>
          </div>

          <div className="hidden sm:block z-50">
            <label htmlFor="icon" className="sr-only">
              Search
            </label>
            <div className="relative min-w-72 md:min-w-80">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                <IconSearch size={20} />
              </div>
              <input
                type="text"
                id="icon"
                name="icon"
                className="py-2.5 px-4 ps-11 block w-full border focus:border-[#24283b] focus:outline-none border-gray-200 rounded-full text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-[#161a27] dark:border-[#24283b] dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-end gap-2">
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
            >
              <IconBell size={22} />
            </button>
            <button
              type="button"
              className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              data-hs-offcanvas="#hs-offcanvas-right"
            >
              <IconUserCircle size={22} />
            </button>
            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
              <button
                onClick={handleIsOpen}
                id="hs-dropdown-with-header"
                type="button"
                className="w-[2.375rem] h-[2.375rem] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
              >
                <img
                  className="inline-block size-[28px] border-2 border-green-500 rounded-full ring-2 ring-white dark:ring-neutral-800"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </button>
              {isOpen ? (
                <div
                  className=" absolute right-0 top-10 hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100  min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-[#131722] dark:border dark:border-neutral-700"
                  aria-labelledby="hs-dropdown-with-header"
                >
                  <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-[#161a27]">
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                      Signed in as
                    </p>
                    <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                      0xfd3...e43
                    </p>
                  </div>
                  <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    <a
                      className="flex cursor-pointer items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                      href="#"
                    >
                      Disconnect
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
