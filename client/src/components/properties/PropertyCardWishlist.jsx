import { useEffect, useState } from "react";
import { HeartIcon } from "../../assets";
import { useAuth } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";
import { twMerge } from "tailwind-merge";
import useWishlistAPIs from "../../hooks/useWishlistAPIs";

const PropertyCardWishlist = ({ property }) => {
  const { user, fetchUser } = useAuth();
  const { openModal, setModalContent } = useModal();
  const [isFavorited, setIsFavorited] = useState(false);

  const { removePropertyFromWishlist } = useWishlistAPIs();

  const onClick = async (e) => {
    e.stopPropagation();
    if (!user) {
      openModal("LoginModal");
      return;
    }

    if (isFavorited) {
      const wishlistId = user.wishlists.find((wishlist) =>
        wishlist.propertyIds.includes(property?.id)
      )?.id;
      if (wishlistId) {
        await removePropertyFromWishlist({
          wishlistId,
          propertyId: property.id,
        });
        await fetchUser();
      }
    } else {
      setModalContent({ propertyId: property?.id });
      openModal("CreateFavoriteModal");
    }
  };

  const favoriteClass = isFavorited ? "#FF385C" : "rgb(0 0 0 / 0.4)";

  useEffect(() => {
    const userFavorites =
      user?.wishlists?.flatMap((wishlist) => wishlist.propertyIds) || [];
    setIsFavorited(userFavorites.includes(property?.id));
  }, [user?.wishlists, property?.id]);

  return (
    <div
      onClick={onClick}
      className="cursor-pointer hover:scale-110 transition-all"
    >
      <HeartIcon
        className={twMerge("size-6 text-white")}
        fill={favoriteClass}
      />
    </div>
  );
};

export default PropertyCardWishlist;
