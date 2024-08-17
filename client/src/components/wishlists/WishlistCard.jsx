import { CloseIcon, HeartIcon } from "../../assets";
import useWishlistAPIs from "../../hooks/useWishlistAPIs";

const WishlistCard = ({ wishlist }) => {
  const { deleteWishlist } = useWishlistAPIs();

  return (
    <article className="w-full flex flex-col gap-3 cursor-pointer relative group">
      {/* Image or Placeholder */}
      <figure className="p-[5px] bg-white shadow-custom-shadow-3 rounded-3xl w-full aspect-square flex items-center justify-center overflow-hidden">
        {wishlist?.coverImage ? (
          <img
            src={wishlist.coverImage}
            alt="Cover image for wishlist item"
            className="object-cover w-full h-full rounded-3xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-3xl bg-rose-100">
            <HeartIcon
              className="size-20 text-rose-500"
              aria-label="No image available"
            />
          </div>
        )}
      </figure>

      {/* Card Details */}
      <figcaption>
        <h3 className="text-gray-800 font-semibold">{wishlist?.name}</h3>
        <span className="text-sm text-gray-600">{`${wishlist?.propertyIds?.length} saved`}</span>
      </figcaption>

      {/* Close Icon (visible on hover) */}
      <div
        onClick={() =>
          deleteWishlist({
            wishlistId: wishlist?.id,
          })
        }
        className="absolute left-4 top-4 p-[5px] bg-white rounded-full cursor-pointer transition-opacity opacity-0 group-hover:opacity-100"
      >
        <CloseIcon className="size-5" aria-label="Close" />
      </div>
    </article>
  );
};

export default WishlistCard;
