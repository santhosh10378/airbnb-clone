import { useCallback } from "react";
import useRequestData from "./useRequestData";

const useUserAPIs = () => {
  const requestData = useRequestData();
  const updateUser = useCallback(
    async ({
      userId,
      data,
      successMessage = "User updated successfully!",
      errorMessage = "Failed to update user.",
      multipart = false,
    }) => {
      try {
        const url = `/users/${userId}`;
        return await requestData({
          method: "put",
          url,
          data,
          successMessage,
          errorMessage,
          multipart,
        });
      } catch (error) {
        console.error("Update User Error:", error);
        throw error;
      }
    },
    []
  );

  const deleteUser = useCallback(
    async ({
      userId,
      successMessage = "User deleted successfully!",
      errorMessage = "Failed to delete user.",
    }) => {
      try {
        const url = `/users/${userId}`;
        return await requestData({
          method: "delete",
          url,
          successMessage,
          errorMessage,
        });
      } catch (error) {
        console.error("Delete User Error:", error);
        throw error;
      }
    },
    []
  );

  return {
    updateUser,
    deleteUser,
  };
};

export default useUserAPIs;
