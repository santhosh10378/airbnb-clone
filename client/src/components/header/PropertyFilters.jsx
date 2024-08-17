import { useRef, useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { useSearchQuery } from "../../context/SearchQueryContext";
import usePageInfo from "../../hooks/usePageInfo";
import { propertyTypes } from "../../data/dummy";
import { ChevronLeftIcon } from "../../assets";
import Button from "../elements/Button";

const PropertyFilters = () => {
  const { searchParams, setSearchParams } = usePageInfo();
  const { updateSearchQuery, filterSearchQuery } = useSearchQuery();

  const activePropertyType = searchParams.get("propertyType");
  const containerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleClick = (data) => {
    if (activePropertyType === data) {
      filterSearchQuery("propertyType");
      searchParams.delete("propertyType");
    } else {
      updateSearchQuery({ propertyType: data });
      searchParams.set("propertyType", data);
    }
    setSearchParams(searchParams);
  };

  const handleScroll = (direction) => {
    containerRef.current.scrollBy({
      left: direction * 200,
      behavior: "smooth",
    });
  };

  const updateButtonVisibility = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener("scroll", updateButtonVisibility);
    updateButtonVisibility();

    return () =>
      container.removeEventListener("scroll", updateButtonVisibility);
  }, []);

  return (
    <div
      className={twMerge("w-full h-full relative overflow-x-hidden md:px-12")}
    >
      <motion.div
        ref={containerRef}
        className="h-full flex items-center gap-x-5 overflow-x-auto scrollbar-hidden"
        initial={{ x: 0 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div
          className={twMerge(
            "hidden md:block absolute left-0 rounded-full p-2 cursor-pointer border",
            showLeftButton
              ? "text-secondary-800 border-secondary-400"
              : "text-secondary-300"
          )}
          onClick={() => handleScroll(-1)}
        >
          <ChevronLeftIcon className="size-3" />
        </div>
        <div
          className={twMerge(
            "hidden md:block absolute right-0 rounded-full p-2 cursor-pointer border",
            showRightButton
              ? "text-secondary-800 border-secondary-400"
              : "text-secondary-300"
          )}
          onClick={() => handleScroll(1)}
        >
          <ChevronLeftIcon className="size-3 rotate-180" />
        </div>
        {propertyTypes.map((item) => (
          <div
            key={item.slug}
            onClick={() => handleClick(item.slug)}
            className={twMerge(
              "h-full py-3 min-w-max max-w-max border-b-2 text-xs transition cursor-pointer",
              activePropertyType === item.slug
                ? "text-secondary-900 border-gray-900 font-semibold"
                : "text-secondary-500 border-transparent"
            )}
          >
            <div className="h-full flex flex-col items-center gap-2">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertyFilters;
