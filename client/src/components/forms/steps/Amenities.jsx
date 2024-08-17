import { useNewPropertyForm } from "../../../context/NewPropertyContext";
import { amenities, amenityCategories } from "../../../data/dummy";
import { useState } from "react";
import Button from "../../elements/Button";

const Amenities = () => {
  const { formData, updateForm } = useNewPropertyForm();
  const [selectedAmenities, setSelectedAmenities] = useState(
    formData.amenities || []
  );

  const handleAmenityClick = (amenityId) => {
    const updatedAmenities = selectedAmenities.includes(amenityId)
      ? selectedAmenities.filter((id) => id !== amenityId)
      : [...selectedAmenities, amenityId];

    setSelectedAmenities(updatedAmenities);
    updateForm("amenities", updatedAmenities);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Choose Your Property Amenities</h3>
      <p className="text-secondary-500 text-sm mb-7">
        Select the amenities that make your property stand out – these features
        can make all the difference for potential guests!
      </p>

      {amenityCategories.map((category, idx) => (
        <div key={idx} className="mb-10">
          <p className="mb-2 font-semibold">{category.name}</p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {amenities
              .filter(
                (amenity) => amenity.amenityCategorySlug === category.slug
              )
              .map((amenity, i) => (
                <li key={i}>
                  <Button
                    variant={
                      selectedAmenities.includes(amenity.slug)
                        ? "secondary-gradient"
                        : "secondary-outlined"
                    }
                    onClick={() => handleAmenityClick(amenity.slug)}
                    className="w-full justify-start rounded-xl flex items-center gap-2 p-3"
                  >
                    <div dangerouslySetInnerHTML={{ __html: amenity.icon }} />
                    <p className="truncate">{amenity.name}</p>
                  </Button>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Amenities;
