// Importing necessary libraries and components
import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

// Importing custom components, utilities, and hooks
import Button from "../elements/Button";
import { eachDayOfInterval, getDifferenceInDays } from "../../utils/dateUtils";
import { formatCurrency } from "../../utils/currencyUtils";
import usePageInfo from "../../hooks/usePageInfo";
import useFetch from "../../hooks/useFetch";

// Importing external libraries and configurations

import { toast } from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";

const PropertyDetailsReservation = () => {
  // Fetch property and booking data
  const { params, refreshPage } = usePageInfo();
  const { data: property } = useFetch(`/properties/${params?.id}`);
  const { data: bookings, fetchData: fetchBookings } = useFetch(
    `/bookings?propertyId=${params?.id}`
  );

  // State to manage selected dates and unavailable dates
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [unavailableDates, setUnavailableDates] = useState([]);

  // Effect to process bookings and set unavailable dates
  useEffect(() => {
    if (bookings && bookings.length > 0) {
      const allUnavailableDates = bookings.flatMap((booking) =>
        eachDayOfInterval(booking.startDate, booking.endDate)
      );
      setUnavailableDates(allUnavailableDates);
    }
  }, [bookings]);

  // Calculate day difference and total price
  const startDate = date[0].startDate;
  const endDate = date[0].endDate;
  const dayDifference = getDifferenceInDays(startDate, endDate);
  const totalPrice = dayDifference * (property?.price || 0);

  // Handle reservation submission
  const onSubmit = async () => {
    const data = {
      propertyId: params?.id,
      startDate,
      endDate,
      totalPrice,
      nightlyPrice: property?.price,
      currency: "INR",
    };

    try {
      await axiosInstance.post(`/bookings`, data);
      toast.success("Reserved");
      setDate([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      ]);
    } catch (error) {
      console.error("Reservation failed", error);
      toast.error("Something went wrong");
    }

    await fetchBookings();
    refreshPage();
  };

  // Fetch unavailable dates when the property ID changes
  useEffect(() => {
    const fetchUnavailableDates = async () => {
      try {
        const response = await axiosInstance.get(
          `/bookings/property/${property?.id}`
        );
        setUnavailableDates(
          response?.data?.flatMap((booking) =>
            eachDayOfInterval(booking.startDate, booking.endDate)
          )
        );
      } catch (error) {
        console.error("Failed to fetch unavailable dates", error);
      }
    };

    if (property?.id) {
      fetchUnavailableDates();
    }
  }, [property?.id]);

  // Render the component
  return (
    <div className="rounded-2xl border w-full">
      <div className="p-5">
        <p>
          <span className="text-xl font-semibold">
            {formatCurrency({ amount: property?.price })}
          </span>{" "}
          <span className="text-sm text-gray-600">night</span>
        </p>
      </div>

      <hr />

      <div>
        <DateRange
          editableDateInputs
          onChange={(item) => setDate([item.selection])}
          ranges={date}
          minDate={new Date()}
          rangeColors={["black"]}
          direction="vertical"
          showDateDisplay={false}
          disabledDates={unavailableDates}
        />
      </div>

      <hr />

      <div className="p-4 flex flex-col gap-4">
        <Button
          onClick={onSubmit}
          variant="primary-gradient"
          className="w-full"
        >
          Reserve
        </Button>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Total</p>
          <p className="text-xl font-semibold">
            {formatCurrency({ amount: totalPrice })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsReservation;
