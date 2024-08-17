import { MinusIcon, PlusIcon } from "../../assets";
import Button from "../elements/Button";

const items = [
  { label: "Adults", description: "Ages 13 or above", type: "noOfAdults" },
  { label: "Children", description: "Ages 2–12", type: "noOfChildren" },
  { label: "Infants", description: "Under 2", type: "noOfInfants" },
];

const PropertyReservationGuests = ({ guestInfo, setGuestInfo, property }) => {
  const handleChange = (type, amount) => {
    setGuestInfo((prev) => {
      const updatedGuestInfo = {
        ...prev,
        [type]: Math.max(prev[type] + amount, 0),
      };

      const totalGuests =
        updatedGuestInfo.noOfAdults +
        updatedGuestInfo.noOfChildren +
        updatedGuestInfo.noOfInfants;

      if (totalGuests > property?.noOfGuests) {
        const extraGuestKey =
          type === "noOfAdults"
            ? "extraAdultGuests"
            : type === "noOfChildren"
            ? "extraChildGuests"
            : "extraInfantGuests";

        return {
          ...updatedGuestInfo,
          [extraGuestKey]: prev[extraGuestKey] + amount,
        };
      }

      return {
        ...updatedGuestInfo,
        extraAdultGuests: 0,
        extraChildGuests: 0,
        extraInfantGuests: 0,
      };
    });
  };

  return (
    <div className="absolute top-14 left-16 right-5 mx-auto bg-white p-5 shadow-custom-shadow-3 rounded-2xl z-10 text-sm">
      {items.map(({ label, description, type }, i) => (
        <div key={type} className="flex flex-col gap-5">
          {i !== 0 && <hr className="mt-5" />}
          <div className="flex items-center justify-between gap-1">
            <div>
              <h3>{label}</h3>
              <p className="text-secondary-500 font-medium text-sm">
                {description}
              </p>
            </div>
            <div className="flex items-center gap-3 text-secondary-500">
              <Button
                onClick={() => handleChange(type, -1)}
                disabled={
                  guestInfo[type] <= 0 ||
                  (type === "noOfAdults" && guestInfo.noOfAdults <= 1)
                }
                variant="secondary-outlined"
                className="rounded-full p-2"
                aria-label={`Decrease ${label.toLowerCase()}`}
              >
                <MinusIcon className="size-3" />
              </Button>
              <input
                type="text"
                value={guestInfo[type] || 0}
                readOnly
                className="w-5 text-secondary-800 text-center border-none bg-transparent"
              />
              <Button
                onClick={() => handleChange(type, 1)}
                variant="secondary-outlined"
                className="rounded-full p-2"
                aria-label={`Increase ${label.toLowerCase()}`}
              >
                <PlusIcon className="size-3" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyReservationGuests;
