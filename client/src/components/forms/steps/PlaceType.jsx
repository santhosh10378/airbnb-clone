import { useNewPropertyForm } from "../../../context/NewPropertyContext";
import Button from "../../elements/Button";

const PlaceType = () => {
  const { formData, updateForm } = useNewPropertyForm();

  const placeTypes = [
    {
      label: "Entire Place",
      value: "entire",
    },
    {
      label: "Private Room",
      value: "private-room",
    },
    {
      label: "Shared Room",
      value: "shared-room",
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold">Choose Your Place Type</h3>
      <p className="text-secondary-500 text-sm mb-7">
        Select the type of place you are offering – whether it’s the entire
        property or just a room, choose what best describes your listing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {placeTypes.map((type, i) => (
          <Button
            onClick={() => updateForm("placeType", type.value)}
            key={i}
            variant={
              formData.placeType === type.value
                ? "secondary-gradient"
                : "secondary-outlined"
            }
            className="w-full justify-start rounded-xl flex items-center gap-2 p-3"
          >
            <p className="truncate">{type.label}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PlaceType;
