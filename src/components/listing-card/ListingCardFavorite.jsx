import { useState } from "react";
import HeartIcon from "../icons/HeartIcon";

const ListingCardFavorite = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorited((prev) => !prev);
  };

  const fillColor = isFavorited ? "#E61E4D" : "rgb(0 0 0 / 0.5)";

  return (
    <div onClick={handleFavorite}>
      <HeartIcon
        className="text-white size-6 hover:scale-105 cursor-pointer transition"
        fill={fillColor}
      />
    </div>
  );
};

export default ListingCardFavorite;
