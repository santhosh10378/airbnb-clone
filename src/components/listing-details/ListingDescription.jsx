import { useModal } from "../../context/ModalContext";
import CustomButton from "../elements/CustomButton";

const ListingDescription = () => {
  const { openModal } = useModal();

  return (
    <div className="flex flex-col gap-2">
      <div className="line-clamp-5">
        Welcome to Orchard Farm, a stunning family-friendly and pet-friendly
        luxury farmhouse just 45 minutes from Delhi and Gurgaon, this farmhouse
        offers a tranquil escape for you and your loved ones with exclusive
        amenities like a private pool and Jacuzzi. It is a perfect place for
        getaways near Delhi and Gurgoan with friends and family and also an
        ideal choice for pre-wedding shoots, corporate events, destination
        weddings and parties. Welcome to Orchard Farm, a stunning
        family-friendly and pet-friendly luxury farmhouse just 45 minutes from
        Delhi and Gurgaon, this farmhouse offers a tranquil escape for you and
        your loved ones with exclusive amenities like a private pool and
        Jacuzzi. It is a perfect place for getaways near Delhi and Gurgoan with
        friends and family and also an ideal choice for pre-wedding shoots,
        corporate events, destination weddings and parties.
      </div>

      <CustomButton
        onClick={() => openModal("DescriptionModal")}
        variant="secondary-link"
      >
        Show more
      </CustomButton>
    </div>
  );
};

export default ListingDescription;
