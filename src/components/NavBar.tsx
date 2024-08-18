import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <div className="border-b border-edge bg-white">
      <div className="container flex items-center justify-center sm:justify-between py-5">
        <div className="max-w-44 lg:max-w-56">
          <Image
            alt="NextIdeaTech"
            priority
            width="295"
            height="80"
            src="/images/logo.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
