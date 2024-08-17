import { useNewPropertyForm } from "../../../context/NewPropertyContext";

const PriceStep = () => {
  const { formData, updateForm } = useNewPropertyForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  const inputFields = [
    { label: "Basic Price", name: "price", value: formData.price },
    {
      label: "Extra Charge per Adult",
      name: "extraAdultCharge",
      value: formData.extraAdultCharge,
    },
    {
      label: "Extra Charge per Child",
      name: "extraChildCharge",
      value: formData.extraChildCharge,
    },
    {
      label: "Extra Charge per Infant",
      name: "extraInfantCharge",
      value: formData.extraInfantCharge,
    },
  ];

  return (
    <div className="space-y-10">
      <div className="flex items-center flex-col md:flex-row md:justify-between gap-2">
        <div className="flex-[2] w-full">
          <h3 className="text-lg font-semibold">Set Your Basic Price</h3>
          <p className="text-secondary-500 text-sm">
            Choose a competitive rate that reflects the value of your property.
          </p>
        </div>
        <div className="flex-[1] w-full">
          <input
            type="number"
            name="price"
            className="outline-none w-full text-right border border-gray-300 rounded-lg p-2 px-3"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Extra Charges</h3>
        <p className="text-secondary-500 text-sm mb-3">
          Specify additional charges for extra guests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {inputFields.slice(1).map((field) => (
            <div key={field.name} className="flex-[2] w-full">
              <label htmlFor={field.name} className="block text-sm font-medium">
                {field.label}
              </label>
              <input
                type="number"
                name={field.name}
                id={field.name}
                className="outline-none w-full text-right border border-gray-300 rounded-lg p-2 px-3"
                value={field.value}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceStep;
