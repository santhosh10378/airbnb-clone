import { useModal } from "../../context/ModalContext";
import Button from "../elements/Button";

const PropertyDetailsDescription = ({ property }) => {
  const { openModal, setModalContent } = useModal();

  const body = (
    <div className="my-7 p-10 px-5 h-full">
      <h2 className="mb-5">About the place</h2>
      <div className="h-[90%] overflow-y-auto">
        <div dangerouslySetInnerHTML={{ __html: property?.description }} />
      </div>
    </div>
  );

  const onClick = () => {
    openModal("DescriptionModal");
    setModalContent(body);
  };

  return (
    <div className="space-y-3">
      <h2 className="">About the place</h2>
      <div className="line-clamp-5">{property?.description}</div>

      <Button onClick={onClick} variant="secondary-link" className="text-base">
        Show more
      </Button>
    </div>
  );
};

export default PropertyDetailsDescription;
