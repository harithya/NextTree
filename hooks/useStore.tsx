import http from "@/utils/http";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
const useStore = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>({});
  const { addToast } = useToasts();

  interface Params {
    url: string;
    data: any;
    onSuccess?: (data: any) => void;
    onError?: (err: any) => void;
    disableToast?: boolean;
  }
  const mutate = async (params: Params) => {
    setIsLoading(true);
    const { url, data } = params;
    try {
      const req = await http.post(url, data);
      if (params.onSuccess) {
        params.onSuccess(req.data);
      }

      if (!params.disableToast) {
        addToast("Yeahh data has been saved ", {
          appearance: "success",
        });
      }

      return req;
    } catch (error: any) {
      // validation error
      const message =
        error.response.data.message ?? "Oops something went wrong";
      addToast(message, {
        appearance: "error",
      });
      if (error.response.status === 422) {
        setError(error.response.data);
      }

      if (params.onError) {
        params.onError(error);
      }
    }
    setIsLoading(false);
  };

  return {
    mutate,
    isLoading,
    error,
  };
};

export default useStore;
