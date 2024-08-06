import { twMerge } from "tailwind-merge";
import { propertyTypes } from "../../constants/dummy";
import Container from "../../layouts/Container";
import { useSearchQuery } from "../../context/SearchQueryContext";
import Filters from "./Filters";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import { useRef } from "react";

const QucikFilters = () => {
  const { searchQuery, setSearchQuery } = useSearchQuery();
  const ref = useRef(null);

  const setPropertyType = (value) => {
    setSearchQuery((prev) => ({
      ...prev,
      propertyType: prev.propertyType === value ? null : value,
    }));
  };

  const handleScroll = (direction) => {
    const scrollAmount = 100;
    if (direction === "left") {
      ref.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="border-b bg-white fixed top-[80px] h-[80px] md:h-[90px] w-full z-10">
      <Container>
        <div className="relative h-full w-full flex items-center gap-5">
          <div
            ref={ref}
            className="md:ml-7 h-full flex items-center overflow-x-auto overflow-y-hidden transition duration-300"
          >
            {propertyTypes.map((item) => (
              <div
                key={item.id}
                onClick={() => setPropertyType(item.slug)}
                className={twMerge(
                  "flex flex-col items-center justify-center gap-2 p-2 px-4 w-[100px] h-full text-xs border-b-2 transition cursor-pointer",
                  searchQuery?.propertyType === item.slug
                    ? "text-secondary-900 border-secondary-900"
                    : "text-neutral-500 border-transparent hover:text-secondary-900"
                )}
              >
                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                <div className="truncate w-full overflow-hidden whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <Filters />
          </div>

          <div className="hidden md:block w-20 h-[80%] blur-md bg-white absolute -left-8"></div>
          <div className="hidden md:block w-20 h-[80%] blur-md bg-white absolute right-28"></div>
          <div
            onClick={() => handleScroll("left")}
            className="hidden md:block absolute -left-1 border rounded-full p-2 bg-white transition cursor-pointer"
          >
            <ChevronLeftIcon className="size-3" />
          </div>
          <div
            onClick={() => handleScroll("right")}
            className="hidden md:block absolute right-2 md:right-32 border rounded-full p-2 bg-white transition cursor-pointer"
          >
            <ChevronLeftIcon className="size-3 rotate-180" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default QucikFilters;
