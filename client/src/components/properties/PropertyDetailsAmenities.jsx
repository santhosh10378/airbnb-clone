import { twMerge } from "tailwind-merge";
import { useModal } from "../../context/ModalContext";
import { amenities, amenityCategories } from "../../data/dummy";
import Button from "../elements/Button";

const PropertyDetailsAmenities = ({ property }) => {
  const { openModal, setModalContent, isModalOpen } = useModal();

  const body = (
    <div className="my-7 p-10 px-5 h-full">
      <h2 className="mb-5">What this place offers</h2>
      <div className="h-[90%] overflow-y-auto">
        {amenityCategories.map((category, i) => (
          <div
            key={category.slug}
            className={twMerge(
              i === amenityCategories.length - 1 ? "mb-10" : ""
            )}
          >
            <p className="text-secondary-900 font-semibold mb-1">
              {category.name}
            </p>
            <div className="mb-10">
              {amenities
                .filter(
                  (amenity) => amenity.amenityCategorySlug === category.slug
                )
                .filter((amenity) =>
                  property?.amenities?.includes(amenity?.slug)
                )
                .map((amenity) => (
                  <div
                    key={amenity.slug}
                    className="flex items-center gap-2 text-gray-600 py-4 border-b"
                  >
                    <div dangerouslySetInnerHTML={{ __html: amenity.icon }} />
                    <p>{amenity.name}</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const onClick = () => {
    openModal("AmenitiesModal");
    setModalContent(body);
  };

  return (
    <div className="space-y-5">
      <h2 className="">What this place offers</h2>

      <div className="grid grid-cols-2 gap-3">
        {amenities
          .filter((amenity) => property?.amenities?.includes(amenity.slug))
          .slice(0, 10)
          .map((amenity) => (
            <div
              key={amenity.slug}
              className="flex items-center gap-3 text-secondary-700 "
            >
              <div dangerouslySetInnerHTML={{ __html: amenity.icon }} />
              <span>{amenity.name}</span>
            </div>
          ))}
      </div>

      <Button
        onClick={onClick}
        variant="primary-outlined"
        className="text-base px-6 py-2"
      >
        {`Show all ${property?.amenities?.length} amenities`}
      </Button>
    </div>
  );
};

export default PropertyDetailsAmenities;
