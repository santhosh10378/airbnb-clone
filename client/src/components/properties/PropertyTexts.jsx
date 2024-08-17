import { formatCurrency } from "../../utils/currencyUtils";
import { formatDate } from "../../utils/dateUtils";

const PropertyTexts = ({ property, myProperty, trip, booking }) => {
  const formattedTripDate = trip
    ? `${formatDate({
        date: trip?.startDate,
      })} - ${formatDate({ date: trip?.endDate })}`
    : "";

  const formattedBookingDate = booking
    ? `${formatDate({
        date: booking?.startDate,
      })} - ${formatDate({ date: booking?.endDate })}`
    : "";

  return (
    <div className="flex flex-col gap-1">
      <h3 className="truncate">{`${property.city}, ${property.country}`}</h3>
      <p className="truncate text-sm text-secondary-600">{`${property.title}`}</p>
      {trip && (
        <p className="truncate text-sm text-secondary-600">
          {formattedTripDate}
        </p>
      )}

      {booking && (
        <p className="truncate text-sm text-secondary-600">
          {formattedBookingDate}
        </p>
      )}
      <p>
        <span className="text-lg font-semibold">
          {formatCurrency({ amount: trip ? trip.totalPrice : property.price })}
        </span>
        &nbsp;
        {!trip && <span className="text-sm text-secondary-600">night</span>}
      </p>
    </div>
  );
};

export default PropertyTexts;
