import ListingCardActionButtons from "./ListingCardActionButtons";
import ListingCardDetails from "./ListingCardDetails";
import ListingCardFavorite from "./ListingCardFavorite";
import ListingCardImages from "./ListingCardImages";

const ListingCard = ({ trip, booking, myListing }) => {
  return (
    <article className="flex flex-col gap-4 relative overflow-hidden">
      <div className="absolute right-3 top-3">
        <ListingCardFavorite />
      </div>
      <ListingCardImages
        src="https://a0.muscache.com/im/pictures/miso/Hosting-1106286026338594084/original/ef1d9cb5-4031-4ef7-8d55-dc3131a9f051.jpeg?im_w=1200"
        alt="Modern house with large windows"
      />
      <ListingCardDetails
        location="San Francisco, California"
        title="Luxurious Modern House"
        price={800}
        rating={4.5}
      />
      {(trip || myListing || booking) && (
        <ListingCardActionButtons
          trip={trip}
          booking={booking}
          myListing={myListing}
        />
      )}
    </article>
  );
};

export default ListingCard;
