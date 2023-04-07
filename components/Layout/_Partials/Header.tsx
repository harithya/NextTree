import React from "react";
import Image from "next/image";
import { HomeIcon, LinkIcon, SwatchIcon } from "@heroicons/react/24/outline";
import DropdownProfile from "./DropdownProfile";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActive = (route: string) => {
    if (route === router.pathname) {
      return "font-medium";
    }
    return "";
  };

  return (
    <div className="navbar bg-base-100 container flex justify-between">
      <div className="space-x-5">
        <a className="btn btn-ghost normal-case text-xl">
          <Image src={"/next.svg"} height={80} width={80} alt="Logo Next JS" />
        </a>
        <div className="lg:block hidden">
          <ul className="menu menu-horizontal px-5 space-x-5">
            <li>
              <Link href={"/admin/home"} className={isActive("/admin/home")}>
                <HomeIcon className="h-5 w-5" />
                <label>Dashboard</label>
              </Link>
            </li>
            <li>
              <Link href={"/admin/links"} className={isActive("/admin/links")}>
                <LinkIcon className="h-5 w-5" />
                <label>Links</label>
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/appearance"}
                className={isActive("/admin/appearance")}
              >
                <SwatchIcon className="h-5 w-5" />
                <label>Appearance</label>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <DropdownProfile />
    </div>
  );
};

export default Header;
