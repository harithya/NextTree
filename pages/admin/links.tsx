import LinkCard from "@/components/Links/LinkCard";
import EditorLayout from "@/components/Layout/EditorLayout";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { ReactElement, useState } from "react";
import Modal from "@/components/Modal";
import { useQuery } from "react-query";
import http from "@/utils/http";
import LoadingCard from "@/components/Links/LoadingCard";
import { LinkResult } from "@/types/api";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import Input from "@/components/Form/Input";
import { useLoading } from "@/contexts/LoadingContext";

interface LinkForm {
  name: string;
  url: string;
}
const Links = () => {
  const { data, isLoading, refetch } = useQuery(["links"], async () => {
    const req = await http.get("link");
    return req.data.links;
  });

  // Handle Form Add
  const { register, handleSubmit, reset } = useForm<LinkForm>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<LinkForm>();
  const { addToast } = useToasts();
  const loadingContext = useLoading();

  const onSubmit = async (data: LinkForm) => {
    setLoading(true);
    try {
      await http.post("link", data);
      // close modal form-create checked
      document.getElementById("form-create")?.click();
      reset();
      refetch();
    } catch (error: any) {
      if (error.response.status == 422) {
        setError(error.response.data.errors);
      }
      addToast(error.response.data.message, {
        appearance: "error",
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <label htmlFor="form-create" className="btn btn-primary w-full">
        <PlusIcon className="h-5 w-5 mr-3" />
        Add Link
      </label>
      <div className="mt-5">
        {isLoading || loadingContext.isLoading ? (
          <LoadingCard />
        ) : (
          data?.map((val: LinkResult) => <LinkCard key={val.id} {...val} />)
        )}
      </div>
      <Modal id="form-create" title="Add Links">
        <form
          className="mt-10 space-y-5 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            placeholder="Enter Title"
            className="w-full input input-bordered"
            {...register("name")}
            error={error?.name}
          />
          <Input
            type="text"
            placeholder="Enter URL"
            className="w-full input input-bordered"
            {...register("url")}
            error={error?.url}
          />
          <button className={`btn btn-primary w-full ${loading && "loading"}`}>
            Save Links
          </button>
        </form>
      </Modal>
    </div>
  );
};

Links.getLayout = (page: ReactElement) => {
  return <EditorLayout>{page}</EditorLayout>;
};

export default Links;
