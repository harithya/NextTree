import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/contexts/auth-type";
import helper from "@/utils/helper";
import http from "@/utils/http";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import Link from "next/link";

const DropdownProfile = () => {
  const { user } = useContext<AuthContextType>(AuthContext);
  const { addToast } = useToasts();
  const router = useRouter();

  const logout = async () => {
    try {
      const req = await http.post("/auth/logout");
      if (req.status === 200) {
        addToast("Logout Successfully", {
          appearance: "success",
        });
        deleteCookie("token");
        router.replace("/admin/auth/login");
      }
    } catch (error) {
      addToast("Opps something went wrong", {
        appearance: "error",
      });
    }
  };

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
          <Link href={`/${user.username}`}>Visit Bio</Link>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownProfile;
