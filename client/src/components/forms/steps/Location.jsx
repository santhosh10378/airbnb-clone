import { useNewPropertyForm } from "../../../context/NewPropertyContext";
import AutoAddressComplete from "../../common/AutoAddressComplete";
import LocationMap from "../../common/LocationMap";
import Map from "../../common/Map";

const InputField = ({ label, value, onChange, type = "text" }) => (
  <div>
    <p className="text-secondary-900 text-sm">{label}</p>
    <input
      type={type}
      className="w-full mt-1 border-2 rounded-lg p-2 outline-none"
      value={value || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const Location = () => {
  const { formData, updateForm, setFormData } = useNewPropertyForm();

  const handleInputChange = (field) => (value) => {
    updateForm(field, value);
  };

  const fields = [
    { label: "Country", value: formData.country, field: "country" },
    { label: "State", value: formData.state, field: "state" },
    { label: "City", value: formData.city, field: "city" },
    { label: "ZipCode", value: formData.zipCode, field: "zipCode" },
    {
      label: "Latitude",
      value: formData.latitude,
      field: "latitude",
      type: "number",
    },
    {
      label: "Longitude",
      value: formData.longitude,
      field: "longitude",
      type: "number",
    },
    { label: "Address", value: formData.address, field: "address" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h3>Define Your Property Location</h3>
        <p className="text-secondary-600 text-sm">
          Fill in the details to accurately pinpoint where your property is
          located.
        </p>
      </div>

      <div className="space-y-4">
        <AutoAddressComplete setAddress={setFormData} />
        <LocationMap
          latitude={formData.latitude}
          longitude={formData.longitude}
        />
      </div>

      <div className="text-secondary-800 text-center my-5">
        Or fill manually
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {fields.slice(0, 6).map(({ label, value, field, type = "text" }) => (
          <InputField
            key={field}
            label={label}
            value={value}
            onChange={handleInputChange(field)}
            type={type}
          />
        ))}
      </div>

      <div>
        <p className="text-secondary-900 text-sm">{fields[6].label}</p>
        <textarea
          value={fields[6].value}
          onChange={handleInputChange(fields[6].field)}
          className="w-full mt-1 border-2 rounded-lg p-2 outline-none"
          cols={1}
          rows={3}
        />
      </div>
    </div>
  );
};

export default Location;
