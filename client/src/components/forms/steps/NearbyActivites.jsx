import { useState } from "react";
import { useNewPropertyForm } from "../../../context/NewPropertyContext";
import { nearByActivities, nearByActivityCategory } from "../../../data/dummy";
import Button from "../../elements/Button";

const NearbyActivities = () => {
  const { formData, updateForm } = useNewPropertyForm();
  const [selectedActivities, setSelectedActivities] = useState(
    formData.nearbyActivities || []
  );

  const handleActivityToggle = (activityId) => {
    setSelectedActivities((prevSelected) => {
      const isSelected = prevSelected.includes(activityId);
      const newSelected = isSelected
        ? prevSelected.filter((id) => id !== activityId)
        : [...prevSelected, activityId];

      updateForm("nearbyActivities", newSelected);
      return newSelected;
    });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Discover Nearby Activities</h3>
      <p className="text-secondary-500 text-sm mb-7">
        Select the activities that guests can enjoy near your property –
        highlight the best attractions to enhance their stay!
      </p>

      <div>
        {nearByActivityCategory.map((category) => (
          <div key={category.slug} className="mb-10">
            <p className="mb-2 font-semibold">{category.name}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {nearByActivities
                .filter(
                  (activity) =>
                    activity.nearByActivityCategorySlug === category.slug
                )
                .map((activity) => (
                  <Button
                    key={activity.slug}
                    variant={
                      selectedActivities.includes(activity.slug)
                        ? "secondary-gradient"
                        : "secondary-outlined"
                    }
                    onClick={() => handleActivityToggle(activity.slug)}
                    className="w-full justify-start rounded-xl flex items-center gap-2 p-3"
                  >
                    <p className="truncate">{activity.name}</p>
                  </Button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyActivities;
