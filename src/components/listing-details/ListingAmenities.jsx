import { amenities, amenityCategories } from "../../constants/dummy";
import { useModal } from "../../context/ModalContext";
import CustomButton from "../elements/CustomButton";

const body = amenityCategories.map((category) => (
  <div key={category.slug} className="mt-5 px-3">
    <p className="text-secondary-900 font-semibold mb-1">{category.name}</p>
    <div className="mb-10">
      {amenities
        .filter((amenity) => amenity.amenityCategoryId === category.id)
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
));

const ListingAmenities = () => {
  const { openModal, setModalContent } = useModal();

  return (
    <div className="flex flex-col gap-4">
      <h2>What this place offers</h2>

      <div className="grid grid-cols-2 gap-4">
        {amenities?.slice(0, 10).map((amenity) => (
          <div
            key={amenity.slug}
            className="flex items-center gap-2 text-gray-700"
          >
            <div dangerouslySetInnerHTML={{ __html: amenity.icon }} />
            <p>{amenity.name}</p>
          </div>
        ))}
      </div>

      <CustomButton
        onClick={() => {
          openModal("AmenitiesModal");
          setModalContent(body);
        }}
        variant="primary-outlined"
        className="w-max px-8"
      >
        Show all amenities
      </CustomButton>
    </div>
  );
};

export default ListingAmenities;
