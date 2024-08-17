import { useState } from "react";
import { motion } from "framer-motion";
import useSearchDescriptions from "../../hooks/useSearchDescriptions";
import InfoFilter from "./filters/InfoFilter";
import LocationFilter from "./filters/LocationFilter";
import DateFilter from "./filters/DateFilter";
import Button from "../elements/Button";
import { useModal } from "../../context/ModalContext";
import { useSearchQuery } from "../../context/SearchQueryContext";
import SearchIcon2 from "../../assets/icons/SearchIcon2";
import usePageInfo from "../../hooks/usePageInfo";

const items = (descriptions) => [
  {
    id: 1,
    label: "Where",
    description: descriptions.getWhereDescription(),
    component: <LocationFilter />,
  },
  {
    id: 2,
    label: "When",
    description: descriptions.getWhenDescription(),
    component: <DateFilter />,
  },
  {
    id: 3,
    label: "Who",
    description: descriptions.getWhoDescription(),
    component: <InfoFilter />,
  },
];

const MobileSearchForm = () => {
  const descriptions = useSearchDescriptions();
  const [openedId, setOpenedId] = useState(items(descriptions)[0].id);
  const { searchData, resetSearchQuery } = useSearchQuery();
  const { setSearchParams } = usePageInfo();
  const { closeModal } = useModal();

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchParams(searchData);
    closeModal();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-t pb-36 flex flex-col justify-between h-full md:max-h-[80vh] bg-secondary-100 overflow-y-auto"
      aria-label="Mobile Search Form"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        className="flex flex-col gap-5 p-3 pt-6"
      >
        {items(descriptions).map((item) =>
          openedId === item.id ? (
            <div key={item.id}>{item.component}</div>
          ) : (
            <div
              key={item.id}
              onClick={() => setOpenedId(item.id)}
              className="bg-white cursor-pointer transition rounded-2xl p-5 shadow-custom-shadow-2 flex items-center justify-between gap-1"
              role="button"
              aria-label={`Select ${item.label}`}
            >
              <p className="font-medium text-secondary-600">{item.label}</p>
              <p className="text-secondary-900 font-medium">
                {item.description}
              </p>
            </div>
          )
        )}
      </motion.div>

      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        className="absolute bottom-0 left-0 bg-white w-full p-6 py-3 flex items-center justify-between border-t"
      >
        <Button
          variant="secondary-link"
          type="button"
          onClick={() => resetSearchQuery()}
          aria-label="Clear all selections"
        >
          Clear all
        </Button>
        <Button
          variant="primary-gradient"
          type="submit"
          className="px-5 gap-3"
          aria-label="Submit search"
        >
          <SearchIcon2 className="size-3" />
          <span>Search</span>
        </Button>
      </motion.div>
    </form>
  );
};

export default MobileSearchForm;
