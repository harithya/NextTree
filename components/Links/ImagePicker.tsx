import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import http from "@/utils/http";
import { useToasts } from "react-toast-notifications";
import { useQueryClient } from "react-query";

interface Props {
  id: string;
  image?: string;
}
const ImagePicker: React.FC<Props> = ({ id, image }) => {
  const [preview, setPreview] = useState(image);
  const { addToast } = useToasts();
  const queryClient = useQueryClient();

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);

      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      formData.append("id", id);
      try {
        await http.post("/link/upload", formData);
        queryClient.prefetchQuery("links");
      } catch (error: any) {
        addToast(error.response.data.message, {
          appearance: "error",
        });
        setPreview("");
      }
    }
  };

  const removeImage = async () => {
    setPreview("");
    try {
      await http.delete(`link/${id}/delete-image`);
      queryClient.prefetchQuery("links");
    } catch (error: any) {
      addToast(error.response.data.message, {
        appearance: "error",
      });
      setPreview("");
    }
  };

  return (
    <div className="py-5 flex items-center  flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0">
      <div className="p-5 border bg-gray-50 rounded-md flex items-center justify-center relative h-36 w-36">
        {preview && (
          <Image src={preview} height={150} width={150} alt="Image Cover" />
        )}
        {!preview && (
          <p className="text-sm text-center text-gray-500">Image Button</p>
        )}
      </div>
      <div className="flex space-y-5 flex-col">
        <label htmlFor={id} className="btn btn-primary px-10">
          Pick Image
          <input
            type="file"
            accept="image/png, image/jpeg"
            className="hidden"
            onChange={handleChange}
            id={id}
          />
        </label>
        <button className="btn btn-primary btn-outline" onClick={removeImage}>
          Remove Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
