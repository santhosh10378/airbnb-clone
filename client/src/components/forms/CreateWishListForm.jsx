import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";
import Input from "../elements/Input";
import Button from "../elements/Button";
import useWishlistAPIs from "../../hooks/useWishlistAPIs";

const CreateWishListForm = () => {
  const { fetchUser } = useAuth();
  const { closeModal, modalContent } = useModal();
  const [wishlistName, setWishlistName] = useState("");
  const { createWishlist, addPropertyToWishlist } = useWishlistAPIs({});

  const onSubmit = async (e) => {
    e.preventDefault();

    const response = await createWishlist({
      data: {
        name: wishlistName,
      },
    });

    const wishlistId = response.data.wishlist.id;

    if (wishlistId && modalContent?.propertyId) {
      await addPropertyToWishlist({
        propertyId: modalContent.propertyId,
        wishlistId,
      });
    }

    closeModal();
    await fetchUser();
  };

  return (
    <form onSubmit={onSubmit} className="p-5 space-y-5">
      <Input
        id="wishlistName"
        value={wishlistName}
        onChange={(e) => setWishlistName(e.target.value)}
        label="Wishlist Name"
      />
      <Button type="submit" className="w-full">
        Create
      </Button>
    </form>
  );
};

export default CreateWishListForm;
