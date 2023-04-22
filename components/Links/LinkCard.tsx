import { PhotoIcon, TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import InputText from "./InputText";
import { LinkResult } from "@/types/api";
import { useQueryClient } from "react-query";
import http from "@/utils/http";
import { useLoading } from "@/contexts/LoadingContext";

const LinkCard: React.FC<LinkResult> = ({
  title,
  url,
  image,
  is_active,
  id,
}) => {
  const [data, setData] = useState({
    title,
    url,
    image,
    is_active,
  });

  const queryClient = useQueryClient();
  const { setIsLoading } = useLoading();

  const handleDelete = async () => {
    const confirm = window.confirm("Are you sure want to delete this link?");
    if (!confirm) return;
    setIsLoading(true);
    await http.delete(`link/${id}`);
    await queryClient.refetchQueries("links");
    setIsLoading(false);
  };

  return (
    <div className="card w-full bg-base-100 shadow-sm mb-5">
      <div className="card-body w-full">
        <div className="flex justify-between">
          <InputText
            type="text"
            className="card-title"
            autoComplete={"nope"}
            value={data.title}
          />
          <input
            type="checkbox"
            className="toggle"
            onChange={() => null}
            checked={Boolean(data.is_active)}
          />
        </div>
        <InputText
          type="text"
          autoComplete="nope"
          className=" mt-2"
          value={data.url}
        />
        <div className="mt-5 flex justify-between">
          <div className="space-x-5 flex">
            <button className="btn btn-circle btn-sm btn-ghost">
              <PhotoIcon className="h-5 w-5" />
            </button>
          </div>
          <button
            className="btn btn-circle btn-sm btn-ghost"
            onClick={handleDelete}
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
