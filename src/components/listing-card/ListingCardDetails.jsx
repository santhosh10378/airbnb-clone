import React from "react";
import StarIcon from "../icons/StarIcon";
import ListingCardNewTo from "./ListingCardNewTo";
import { formatCurrency } from "../../utils/utils";

const ListingCardDetails = ({ rating, title, price, location }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p className="font-semibold truncate">{location}</p>
          {rating === 0 || !rating ? (
            <ListingCardNewTo />
          ) : (
            <div className="flex items-center gap-1">
              <StarIcon className="size-3" />
              <p className="rating-value">{rating}</p>
            </div>
          )}
        </div>
        <h3 className="truncate">{title}</h3>
        <p>
          <span className="font-semibold text-base">
            {formatCurrency({ amount: price })}
          </span>
          &nbsp;
          <span className="text-sm text-gray-600">per night</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCardDetails;
