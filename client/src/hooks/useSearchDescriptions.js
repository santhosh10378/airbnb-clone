import { useSearchQuery } from "../context/SearchQueryContext";
import { formatDate } from "../utils/dateUtils";

const useSearchDescriptions = () => {
  const { searchQuery } = useSearchQuery();

  const getWhereDescription = () => searchQuery.location || "I'm flexible";

  const getWhenDescription = () => {
    const { startDate, endDate } = searchQuery;

    if (
      !startDate ||
      !endDate ||
      isNaN(new Date(startDate)) ||
      isNaN(new Date(endDate))
    ) {
      return "Add dates";
    }

    return `${formatDate({
      date: startDate,
      options: { month: "short", day: "numeric" },
    })} - ${formatDate({
      date: endDate,
      options: { month: "short", day: "numeric" },
    })}`;
  };

  const getWhoDescription = () => {
    const { noOfAdults, noOfChildren, noOfInfants } = searchQuery;

    if (
      (noOfAdults || 0) === 0 &&
      (noOfChildren || 0) === 0 &&
      (noOfInfants || 0) === 0
    ) {
      return "Add guests";
    }

    return `${noOfAdults} ${noOfAdults === 1 ? "adult" : "adults"}, 
            ${noOfChildren} ${noOfChildren === 1 ? "child" : "children"}, 
            ${noOfInfants} ${noOfInfants === 1 ? "infant" : "infants"}
            `;
  };

  return {
    getWhereDescription,
    getWhenDescription,
    getWhoDescription,
  };
};

export default useSearchDescriptions;
