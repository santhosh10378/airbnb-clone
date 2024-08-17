import { useState } from "react";
import { useSearchQuery } from "../../../context/SearchQueryContext";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // Main CSS file
import "react-date-range/dist/theme/default.css"; // Theme CSS file

const DateFilter = () => {
  const { searchQuery, updateSearchQuery } = useSearchQuery();
  const [date, setDate] = useState([
    {
      startDate: searchQuery.startDate,
      endDate: searchQuery.endDate,
      key: "selection",
    },
  ]);

  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    setDate([item.selection]);
    updateSearchQuery({ startDate, endDate });
  };

  return (
    <div className="bg-white flex flex-col gap-5 cursor-pointer transition rounded-2xl p-5 shadow-custom-shadow-2">
      <h2>When’s your trip?</h2>

      <div className="flex items-center justify-center gap-10">
        <div className="border rounded-lg overflow-hidden w-full sm:w-[300px]">
          <DateRange
            editableDateInputs
            onChange={handleDateChange}
            ranges={date}
            minDate={new Date()}
            rangeColors={["black"]}
            direction="vertical"
            showDateDisplay={false}
            aria-label="Select date range"
          />
        </div>
      </div>
    </div>
  );
};

export default DateFilter;
