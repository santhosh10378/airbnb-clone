import { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import usePageInfo from "../../hooks/usePageInfo";
import useFetch from "../../hooks/useFetch";
import { eachDayOfInterval, getDifferenceInDays } from "../../utils/dateUtils";
import { formatCurrency } from "../../utils/currencyUtils";
import Button from "../elements/Button";
import useBookingAPIs from "../../hooks/useBookingAPIs";
import { ChevronLeftIcon } from "../../assets";
import { useSearchQuery } from "../../context/SearchQueryContext";
import PropertyReservationGuests from "./PropertyReservationGuests";

const PropertyReservation = () => {
  const { params, refreshPage } = usePageInfo();
  const { data: property } = useFetch(`/properties/${params?.id}`);
  const { data: bookings, fetchData: fetchBookings } = useFetch(
    `/bookings?propertyId=${params?.id}&availableDates=true`
  );

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const { createBooking } = useBookingAPIs();
  const [date, setDate] = useState([
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ]);
  const [unavailableDates, setUnavailableDates] = useState([]);
  const [openGuestInfo, setOpenGuestInfo] = useState(false);
  const { searchQuery } = useSearchQuery();
  const [guestInfo, setGuestInfo] = useState({
    noOfAdults: searchQuery.noOfAdults || 1,
    noOfChildren: searchQuery.noOfChildren || 0,
    noOfInfants: searchQuery.noOfInfants || 0,
    extraAdultGuests: 0,
    extraChildGuests: 0,
    extraInfantGuests: 0,
  });

  const totalGuests =
    guestInfo.noOfAdults + guestInfo.noOfChildren + guestInfo.noOfInfants;

  useEffect(() => {
    if (bookings?.length) {
      const allUnavailableDates = bookings.flatMap(({ startDate, endDate }) =>
        eachDayOfInterval(startDate, endDate)
      );

      setUnavailableDates(allUnavailableDates);

      let firstAvailableDate = new Date();
      while (
        allUnavailableDates.some(
          (date) => date.toDateString() === firstAvailableDate.toDateString()
        )
      ) {
        firstAvailableDate.setDate(firstAvailableDate.getDate() + 1);
      }

      let secondAvailableDate = new Date(firstAvailableDate);
      secondAvailableDate.setDate(firstAvailableDate.getDate() + 1);
      while (
        allUnavailableDates.some(
          (date) => date.toDateString() === secondAvailableDate.toDateString()
        ) ||
        eachDayOfInterval(firstAvailableDate, secondAvailableDate).some(
          (date) =>
            allUnavailableDates.some(
              (unavailableDate) =>
                unavailableDate.toDateString() === date.toDateString()
            )
        )
      ) {
        firstAvailableDate.setDate(firstAvailableDate.getDate() + 1);
        secondAvailableDate.setDate(firstAvailableDate.getDate() + 1);
      }

      setDate([
        {
          startDate: firstAvailableDate,
          endDate: secondAvailableDate,
          key: "selection",
        },
      ]);
    }
  }, [JSON.stringify(bookings)]);

  const { startDate, endDate } = date[0];
  const dayDifference = getDifferenceInDays(startDate, endDate);

  let extraAdultGuests = guestInfo.extraAdultGuests;
  let extraChildGuests = guestInfo.extraChildGuests;
  let extraInfantGuests = guestInfo.extraInfantGuests;

  let extraAdultCharge = property?.extraAdultCharge;
  let extraChildCharge = property?.extraChildCharge;
  let extraInfantCharge = property?.extraInfantCharge;

  const extraAdultCharges = extraAdultCharge * guestInfo.extraAdultGuests;
  const extraChildrenCharges = extraChildCharge * guestInfo.extraChildGuests;
  const extraInfantsCharges = extraInfantCharge * guestInfo.extraInfantGuests;
  const extraCharges =
    extraAdultCharges + extraChildrenCharges + extraInfantsCharges;

  const basePrice = dayDifference * (property?.price || 0);
  const totalPrice = basePrice + extraCharges;

  const onSubmit = async () => {
    const data = {
      propertyId: params?.id,
      startDate,
      endDate,
      totalPrice,
      nightlyPrice: property?.price,
      currency: "INR",
    };

    await createBooking({ data });
    setDate([{ startDate: new Date(), endDate: new Date(), key: "selection" }]);
    await fetchBookings();
    refreshPage();
  };

  return (
    <div className="rounded-2xl border w-full">
      <div className="p-4 py-4 flex items-center justify-between relative">
        <p>
          <span className="text-xl font-semibold">
            {formatCurrency({ amount: property?.price })}
          </span>
          <span className="text-sm text-gray-600"> night</span>
        </p>
        <Button
          onClick={() => setOpenGuestInfo((prev) => !prev)}
          variant="secondary-outlined"
          className="rounded-xl items-center gap-3 p-2 px-3"
          aria-label="Select number of guests"
        >
          <p className="text-[12px] font-bold">GUESTS</p>
          <p className="font-normal text-gray-600">
            {`${totalGuests || 0} guest${totalGuests > 1 ? "s" : ""}`}
          </p>
          <div style={{ transform: "rotate(270deg)" }}>
            <ChevronLeftIcon className="size-3" />
          </div>
        </Button>

        {openGuestInfo && (
          <PropertyReservationGuests
            guestInfo={guestInfo}
            setGuestInfo={setGuestInfo}
            property={property}
          />
        )}
      </div>

      <hr />

      <div>
        <DateRange
          editableDateInputs
          onChange={(item) => setDate([item.selection])}
          ranges={date}
          minDate={today}
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
          aria-label="Reserve property"
        >
          Reserve
        </Button>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">{`${formatCurrency({
            amount: basePrice,
          })} × ${dayDifference} ${dayDifference > 1 ? "nights" : "night"}`}</p>
          <p className="text-sm font-semibold">
            {formatCurrency({ amount: basePrice })}
          </p>
        </div>

        {extraCharges > 0 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{`${formatCurrency({
              amount: property?.extraAdultCharge,
            })} × ${extraAdultGuests} ${
              extraAdultGuests > 1 ? "adults" : "adult"
            }`}</p>
            <p className="text-sm font-semibold">
              {formatCurrency({ amount: extraAdultCharges })}
            </p>
          </div>
        )}
        {extraCharges > 0 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{`${formatCurrency({
              amount: property?.extraChildCharge,
            })} × ${extraChildGuests} ${
              extraChildGuests > 1 ? "childrens" : "childrens"
            }`}</p>
            <p className="text-sm font-semibold">
              {formatCurrency({ amount: extraChildrenCharges })}
            </p>
          </div>
        )}
        {extraCharges > 0 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">{`${formatCurrency({
              amount: property?.extraInfantCharge,
            })} × ${extraInfantGuests} ${
              extraInfantGuests > 1 ? "infants" : "infant"
            }`}</p>
            <p className="text-sm font-semibold">
              {formatCurrency({ amount: extraInfantsCharges })}
            </p>
          </div>
        )}

        <hr />

        <div className="flex items-center justify-between">
          <p className="text-xl text-gray-600">Total</p>
          <p className="text-xl font-semibold">
            {formatCurrency({ amount: totalPrice })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyReservation;
