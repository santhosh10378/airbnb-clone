import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import CustomButton from "../elements/CustomButton";
import { formatCurrency } from "../../utils/utils";

const ListingReservation = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="rounded-2xl border w-full">
      <div className="p-5">
        <p>
          <span className="text-xl font-semibold">
            {formatCurrency({ amount: 500 })}
          </span>{" "}
          <span className="text-sm text-gray-600">night</span>
        </p>
      </div>

      <hr />

      <div>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setDate([item.selection])}
          ranges={date}
          minDate={new Date()}
          rangeColors={["black"]}
          direction="vertical"
          showDateDisplay={false}
        />
      </div>

      <hr />

      <div className="p-4 flex flex-col gap-4">
        <CustomButton variant="primary-gradient">Reserve</CustomButton>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-xl font-semibold">
            {formatCurrency({ amount: 7500 })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListingReservation;
