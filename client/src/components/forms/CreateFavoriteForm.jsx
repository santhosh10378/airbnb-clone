import { useAuth } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";
import Button from "../elements/Button";
import useWishlistAPIs from "../../hooks/useWishlistAPIs";
import WishlistCard from "../wishlists/WishlistCard";

const CreateFavoriteForm = () => {
  const { fetchUser, user } = useAuth();
  const { closeModal, openModal, setModalContent, modalContent } = useModal();
  const { addPropertyToWishlist } = useWishlistAPIs({});
  console.log(modalContent);

  const createFav = async (wishlistId) => {
    if (modalContent?.propertyId) {
      await addPropertyToWishlist({
        propertyId: modalContent.propertyId,
        wishlistId,
      });

      closeModal();
      await fetchUser();
    }
  };

  return (
    <div className="space-y-0">
      <div
        className="grid grid-cols-1 
            md:grid-cols-2 gap-7 h-[84vh] md:h-[280px] overflow-y-auto p-5 border-y"
      >
        {user?.wishlists?.map((wishlist) => (
          <div key={wishlist.id} onClick={() => createFav(wishlist.id)}>
            <WishlistCard wishlist={wishlist} />
          </div>
        ))}
      </div>

      <div className="p-3">
        <Button
          onClick={() => {
            openModal("CreateWishListModal");
            setModalContent(modalContent);
          }}
          variant="secondary-gradient"
          className="w-full"
        >
          Create new wishlist
        </Button>
      </div>
    </div>
  );
};

export default CreateFavoriteForm;
