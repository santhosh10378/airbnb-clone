import StarIcon from "../icons/StarIcon";

const ListingInfoText = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-medium">Farm stay in Gurugram, India</p>

      <ul className="text-sm text-gray-600 flex items-center gap-2">
        <li className="flex items-center gap-2">
          <span>12 guests</span>
          <span>·</span>
        </li>
        <li className="flex items-center gap-2">
          <span>3 bedrooms</span>
          <span>·</span>
        </li>
        <li className="flex items-center gap-2">
          <span>8 beds</span>
          <span>·</span>
        </li>
        <li className="flex items-center gap-2">
          <span>4 bathrooms</span>
        </li>
      </ul>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <StarIcon className="size-3" />
          <p className="rating-value">4.5</p>
        </div>
        <p className="underline">
          <span>5 </span>
          <span>reviews</span>
        </p>
      </div>
    </div>
  );
};

export default ListingInfoText;
