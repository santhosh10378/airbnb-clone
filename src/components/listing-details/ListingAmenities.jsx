import { amenities } from "../../constants/dummy";
import { useModal } from "../../context/ModalContext";
import CustomButton from "../elements/CustomButton";
import AmenitiesModal from "../modals/modal-objects/AmenitiesModal";

const ListingAmenities = () => {
  const { openModal, setModalContent } = useModal();

  return (
    <div className="flex flex-col gap-4">
      <h2>What this place offers</h2>

      <div className="grid grid-cols-2 gap-4">
        {amenities.slice(0, 10).map((amenity) => (
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
          setModalContent("Amenities Modals Amenities");
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
