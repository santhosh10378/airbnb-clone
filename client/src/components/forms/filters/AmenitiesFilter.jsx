import { twMerge } from "tailwind-merge";
import { amenities, amenityCategories } from "../../../data/dummy";
import Button from "../../elements/Button";
import { useState } from "react";

const AmenitiesFilter = () => {
  const [show, setShow] = useState(false);
  const sliceSize = show ? amenityCategories.length : 1;

  return (
    <div className="flex flex-col gap-5">
      {amenityCategories.slice(0, sliceSize).map((category, i) => (
        <div key={i} className="">
          <h4
            className={twMerge("font-medium mb-3", i === 0 ? "mt-3" : "mt-10")}
          >
            {category.name}
          </h4>

          <div className="grid grid-cols-2 gap-x-1 gap-y-6 ">
            {amenities
              .filter((item) => item.amenityCategorySlug === category.slug)
              .map((amenity, i) => (
                <label
                  key={i}
                  className="flex items-center gap-x-2 cursor-pointer transition"
                >
                  {/* Hidden Native Checkbox */}
                  <input type="checkbox" className="hidden peer" />
                  {/* Custom Checkbox */}
                  <span className="w-6 h-6 bg-secondary-200 text-secondary-200   rounded-md flex items-center justify-center peer-checked:bg-secondary-gradient peer-checked:text-white">
                    {/* Checkmark */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentcolor"
                      strokeWidth="4"
                      aria-hidden="true"
                      display="block"
                      overflow="visible"
                      viewBox="0 0 32 32"
                      style={{ height: 16, width: 16 }}
                    >
                      <path d="M4 16.5l8 8 16-16"></path>
                    </svg>
                  </span>
                  <span className="truncate">{amenity.name}</span>
                </label>
              ))}
          </div>
        </div>
      ))}

      <Button
        onClick={() => setShow((prev) => !prev)}
        variant="secondary-link"
        className="text-base"
      >
        {show ? "Show less" : "Show more"}
      </Button>
    </div>
  );
};

export default AmenitiesFilter;
