import { useNavigate } from "react-router-dom";
import PropertyImagesCarousel from "./PropertyImagesCarousel";
import PropertyTexts from "./PropertyTexts";
import PropertyCardWishlist from "./PropertyCardWishlist";

const PropertyCard = ({ property, refetchData, myProperty, booking, trip }) => {
  const navigate = useNavigate();

  return (
    <article className="w-full flex flex-col gap-2 relative group">
      <div
        onClick={() => navigate(`/properties/${property.id}`)}
        className="rounded-2xl overflow-hidden cursor-pointer transition-all"
      >
        <PropertyImagesCarousel property={property} />
      </div>

      <div className="absolute right-3 top-3">
        <PropertyCardWishlist property={property} />
      </div>

      <PropertyTexts
        property={property}
        refetchData={refetchData}
        myProperty={myProperty}
        booking={booking}
        trip={trip}
      />
    </article>
  );
};

export default PropertyCard;
