import React from "react";
import Image from "next/image";
import { LinkIcon, SwatchIcon } from "@heroicons/react/24/outline";
import DropdownProfile from "./DropdownProfile";

const Header = () => {
  return (
    <div className="navbar bg-base-100 container flex justify-between">
      <div className="space-x-5">
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={"/next.svg"} height={80} width={80} alt="Logo Next JS" />
        </a>
        <div className="lg:block hidden">
          <ul className="menu menu-horizontal px-5 space-x-5">
            <li>
              <a>
                <LinkIcon className="h-5 w-5" />
                <label>Links</label>
              </a>
            </li>
            <li>
              <a>
                <SwatchIcon className="h-5 w-5" />
                <label>Appearance</label>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <DropdownProfile />
    </div>
  );
};

export default Header;
