import { useSearchQuery } from "../../context/SearchQueryContext";
import PlaceTypeFilter from "./filters/PlaceTypeFilter";
import FilterHeading from "./filters/FilterHeading";
import Button from "../elements/Button";
import { useMemo } from "react";
import { useModal } from "../../context/ModalContext";
import RoomsAndBedFilter from "./filters/RoomsAndBedFilter";
import PriceFilter from "./filters/PriceFilter";
import AmenitiesFilter from "./filters/AmenitiesFilter";
import usePageInfo from "../../hooks/usePageInfo";

const FiltersForm = () => {
  const { resetSearchQuery, searchData, searchQuery } = useSearchQuery();
  const { setSearchParams } = usePageInfo();
  const { closeModal } = useModal();

  const BtnText = useMemo(() => {
    let text;

    if (searchQuery.placeType === "any") {
      text = "places";
    }

    if (searchQuery.placeType === "shared-room") {
      text = "shared rooms";
    }

    if (searchQuery.placeType === "private-room") {
      text = "private rooms";
    }

    if (searchQuery.placeType === "entire") {
      text = "homes";
    }

    return text;
  }, [JSON.stringify(searchQuery)]);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchData);
    closeModal();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-t w-full flex flex-col justify-between gap-3 h-full"
      aria-label="Filters Form"
    >
      <div className="p-6 pb-40 md:pb-36 flex flex-col gap-10 overflow-y-auto scrollbar-hidden">
        <div className="space-y-5">
          <FilterHeading
            title="Type of place"
            subtitle="Search rooms, entire homes or any type of place"
          />
          <PlaceTypeFilter />
        </div>
        <hr />
        <div className="space-y-5">
          <FilterHeading
            title="Price range"
            subtitle="Nightly prices before fees and taxes"
          />
          <PriceFilter />
        </div>
        <hr />
        <div className="space-y-5">
          <FilterHeading
            title="Rooms and beds"
            subtitle="Choose the number of bedrooms and beds to suit your needs."
          />
          <RoomsAndBedFilter />
        </div>
        <hr />
        <div className="space-y-5">
          <FilterHeading
            title="Amenities"
            subtitle="Select the amenities that matter most to you."
          />
          <AmenitiesFilter />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 bg-white w-full p-6 py-3 flex items-center justify-between border-t">
        <Button
          variant="primary-link"
          type="button"
          onClick={() => resetSearchQuery()}
        >
          Clear all
        </Button>
        <Button variant="secondary-gradient" type="submit">
          Show {BtnText}
        </Button>
      </div>
    </form>
  );
};

export default FiltersForm;
