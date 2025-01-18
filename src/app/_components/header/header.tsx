import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../button";
import { Bar3Icon } from "../icons/icons";
import { TopNavigation } from "./top-navigation";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <Link className="text-3xl font-bold font-heading" href="/">
          <Image
            src="/images/logo-light.svg"
            width={100}
            height={36}
            alt="student learning management system"
          />
        </Link>
        <TopNavigation />

        <div className="hidden xl:flex space-x-5 items-center">
          {/* <a className="flex items-center hover:text-gray-200" href="#">
            <IconUserProfile width={36} height={36} />
          </a> */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">View notifications</span>
              <Image
                src="/images/bell.svg"
                width={24}
                height={24}
                alt="notification icon"
              />
            </button>

            {/* <!-- Separator --> */}
            <div
              className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-500"
              aria-hidden="true"
            ></div>

            <div className="relative">
              <Button
                variant="ghost"
                type="button"
                className=" flex items-center"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <div className="sr-only">Open user menu</div>
                <Image
                  className="rounded-full bg-gray-50"
                  src="/images/user.jpg"
                  width={32}
                  height={32}
                  alt=""
                />
                <div className="hidden lg:flex lg:items-center">
                  <div
                    className="mx-2 text-xs font-semibold leading-6 text-white"
                    aria-hidden="true"
                  >
                    مسعود مهره کش
                  </div>
                  {/* <IconArrowDown /> */}
                </div>
              </Button>
              {/* <div
                className="absolute right-0 z-10 w-full origin-top-right rounded-md bg-[#191e24] py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a
                  href="#"
                  className="block px-3 py-1 text-sm leading-6 text-white"
                  role="menuitem"
                  id="user-menu-item-0"
                >
                  Your profile
                </a>
                <a
                  href="#"
                  className="block px-3 py-1 text-sm leading-6 text-white"
                  role="menuitem"
                  id="user-menu-item-1"
                >
                  Sign out
                </a>
              </div> */}
            </div>
          </div>
        </div>
        {/* <!-- Responsive navbar --> */}
        <Link className="navbar-burger self-center mr-12 xl:hidden" href="/">
          <Bar3Icon />
        </Link>
      </div>
    </header>
  );
};
