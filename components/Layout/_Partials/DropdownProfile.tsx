import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/contexts/auth-type";
import helper from "@/utils/helper";

const DropdownProfile = () => {
  const { user } = useContext<AuthContextType>(AuthContext);
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image
            src={helper.getAvatar(user.image)}
            alt="Profile UI"
            height={50}
            width={50}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownProfile;
