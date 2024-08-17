import toast from "react-hot-toast";
import { useAxiosInstance } from "./useAxiosInstance";

const useRequestData = () => {
  const axiosInstance = useAxiosInstance();
  const requestData = async ({
    method,
    url,
    data,
    successMessage = "Success",
    errorMessage = "Something went wrong!",
    multipart = false,
  }) => {
    try {
      const options = {
        headers: {
          "Content-Type": multipart
            ? "multipart/form-data"
            : "application/json",
        },
      };

      let res;
      switch (method) {
        case "post":
          res = await axiosInstance.post(url, data, options);
          break;
        case "put":
          res = await axiosInstance.put(url, data, options);
          break;
        case "delete":
          res = await axiosInstance.delete(url, { data, ...options });
          break;
        default:
          throw new Error("Invalid method");
      }

      toast.success(successMessage);
      return res;
    } catch (err) {
      console.error(`Error with ${method.toUpperCase()} request:`, err);
      toast.error(errorMessage);
      throw err;
    }
  };

  return requestData;
};

export default useRequestData;
