import React, { Fragment, useContext, useState } from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  Bars3Icon,
  LinkIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import DropdownProfile from "./DropdownProfile";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/contexts/auth-type";

const Header = () => {
  const router = useRouter();
  const { user } = useContext<AuthContextType>(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (route: string) => {
    if (route === router.pathname) {
      return "font-medium";
    }
    return "";
  };

  return (
    <Fragment>
      <div className="navbar bg-base-100 container-fluid flex justify-between sticky z-50 top-0 ">
        <div className="space-x-5">
          <div className="flex-none block xl:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <Image
              src={"/next.svg"}
              className="text-white"
              height={80}
              width={80}
              alt="Logo Next JS"
            />
          </a>
          <div className="lg:block hidden">
            <ul className="menu menu-horizontal px-5 space-x-5">
              <li>
                <Link
                  href={"/admin/links"}
                  className={isActive("/admin/links")}
                >
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
        <div className="space-x-5">
          <Link
            href={"/" + user?.username}
            target="_blank"
            className="btn hidden lg:flex btn-sm px-5 btn-outline "
          >
            <ArrowUpRightIcon className="h-4 w-4 mr-3" />
            Visit Link Bio
          </Link>
          <DropdownProfile />
        </div>
      </div>
      <div>
        {isOpen && (
          <ul className="menu bg-base-100 w-full">
            <li>
              <Link href={"/admin/links"} className={isActive("/admin/links")}>
                <label>Links</label>
              </Link>
            </li>
            <li>
              <Link
                href={"/admin/appearance"}
                className={isActive("/admin/appearance")}
              >
                <label>Appearance</label>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default Header;
