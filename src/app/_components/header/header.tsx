import Image from "next/image";
import React from "react";
import { TopNavigation } from "./top-navigation";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content dark:border-opacity-5">
      <div className="container flex justify-between items-center">
        <Image
          src="/images/logo-light.svg"
          width={100}
          height={36}
          alt="student learning management system"
        />
        <TopNavigation />
        <span className="mr-auto">User Authentication</span>
      </div>
    </header>
  );
};
