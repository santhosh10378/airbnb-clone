import { useState } from "react";
import { useNewPropertyForm } from "../../../context/NewPropertyContext";
import { propertyTypes } from "../../../data/dummy";
import Button from "../../elements/Button";

const PropertyType = () => {
  const { formData, updateForm } = useNewPropertyForm();
  const [selectedPropertyType, setSelectedPropertyType] = useState(
    formData.propertyType
  );

  const handlePropertyTypeSelect = (typeId) => {
    setSelectedPropertyType(typeId);
    updateForm("propertyType", typeId);
  };

  return (
    <div>
      <h3>Choose Your Property Type</h3>
      <p className="text-secondary-500 text-sm mb-7">
        Select the category that best fits your property to help guests find
        exactly what they’re looking for!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {propertyTypes.map((item) => (
          <Button
            key={item.slug}
            variant={
              selectedPropertyType === item.slug
                ? "secondary-gradient"
                : "secondary-outlined"
            }
            onClick={() => handlePropertyTypeSelect(item.slug)}
            className="w-full justify-start it rounded-xl"
          >
            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            <p className="truncate">{item.name}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PropertyType;
