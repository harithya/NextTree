import React, { ChangeEvent, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { AuthContextType } from "@/types/contexts/auth-type";
import Image from "next/image";
import helper from "@/utils/helper";
import http from "@/utils/http";

const ProfileForm = () => {
  const { user, setUser } = useContext<AuthContextType>(AuthContext);

  const changeUser = (name: string, value: string) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const updateProfileDB = async (name: string, value: any) => {
    const formData = new FormData();
    formData.append(name, value);
    formData.append("_method", "PUT");
    const req = await http.post("profile", formData);
    return req.data;
  };

  const handleUploadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      changeUser("image", URL.createObjectURL(e.target.files[0]));
      updateProfileDB("image", e.target.files[0]);
    }
  };

  const removeImage = () => {
    changeUser("image", "");
    updateProfileDB("remove_image", true);
  };

  return (
    <div>
      <div className="flex items-center space-x-5">
        <div className="avatar">
          <div className="w-28 mask mask-squircle">
            <Image
              alt="Profile Image"
              height={300}
              width={300}
              src={helper.getAvatar(user.image)}
            />
          </div>
        </div>
        <div className="w-full space-y-5">
          <label htmlFor="file-picker" className="btn btn-primary w-full">
            <input
              type="file"
              id="file-picker"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleUploadImage}
            />
            Pick an Image
          </label>
          <button
            className="btn btn-outline btn-primary w-full"
            onClick={removeImage}
          >
            Remove Image
          </button>
        </div>
      </div>
      <div className="w-full mt-10 space-y-5">
        <input
          type="text"
          className="w-full bg-base-300/30 px-5 py-3 rounded-lg outline-none"
          placeholder="Name"
          value={user.name}
          onChange={(e) => changeUser("name", e.target.value)}
          onBlur={() => updateProfileDB("name", user.name)}
        />
        <textarea
          className="w-full bg-base-300/30 px-5 py-3 rounded-lg outline-none"
          placeholder="Bio"
          rows={3}
          defaultValue={user.bio ?? ""}
          onChange={(e) => changeUser("bio", e.target.value)}
          onBlur={() => updateProfileDB("bio", user.bio)}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileForm;
