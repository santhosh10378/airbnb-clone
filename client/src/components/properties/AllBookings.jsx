import { useState, useMemo } from "react";
import PropertiesGrid from "../../layouts/PropertiesGrid";
import PropertyCard from "./PropertyCard";
import Button from "../elements/Button";
import useBookingAPIs from "../../hooks/useBookingAPIs";

const AllBookings = ({ bookings, fetchData }) => {
  const { cancelBooking, confirmBooking } = useBookingAPIs();
  const [activeTab, setActiveTab] = useState("all");

  const filterBookings = useMemo(() => {
    const filterByCriteria = (isApproved, isCancelled) =>
      bookings?.filter(
        (booking) =>
          (isApproved === null || booking.isApproved === isApproved) &&
          (isCancelled === null || booking.isCancelled === isCancelled)
      );

    return {
      all: bookings,
      approvedNotCancelled: filterByCriteria(true, false),
      approvedAndCancelled: filterByCriteria(true, true),
      notApprovedAndCancelled: filterByCriteria(false, true),
      notApproved: filterByCriteria(false, false),
    };
  }, [bookings]);

  const filteredBookings = filterBookings[activeTab] || filterBookings.all;

  const handleCancel = async (bookingId, tabId) => {
    await cancelBooking({ id: bookingId });
    await fetchData();
  };

  const handleConfirm = async (bookingId, tabId) => {
    await confirmBooking({ id: bookingId });
    await fetchData();
  };

  return (
    <div className="space-y-7">
      <nav
        aria-label="Booking Filter Tabs"
        className="mb-4 flex gap-3 flex-wrap"
      >
        {Object.keys(filterBookings).map((key) => {
          const buttonText = {
            all: "All Bookings",
            approvedNotCancelled: "Approved and Not Cancelled",
            approvedAndCancelled: "Approved and Cancelled",
            notApprovedAndCancelled: "Not Approved and Cancelled",
            notApproved: "Not Approved",
          };

          return (
            <Button
              key={key}
              className="p-2 px-4 rounded-full"
              variant={
                activeTab === key ? "secondary-gradient" : "secondary-outlined"
              }
              onClick={() => setActiveTab(key)}
            >
              {buttonText[key]}
            </Button>
          );
        })}
      </nav>

      <PropertiesGrid>
        {filteredBookings?.map((booking) => (
          <div key={booking.id} className="w-full flex flex-col gap-4">
            <PropertyCard property={booking.property} trip={booking} />
            <div className="w-full flex flex-col gap-2">
              {!booking.isApproved && !booking.isCancelled && (
                <Button
                  variant="secondary-gradient"
                  className="p-2 w-full"
                  onClick={() => handleConfirm(booking.id, activeTab)}
                >
                  Confirm Booking
                </Button>
              )}

              {!booking.isCancelled && (
                <Button
                  variant="primary"
                  className="p-2 w-full mb-2"
                  onClick={() => handleCancel(booking.id, activeTab)}
                >
                  Cancel Booking
                </Button>
              )}
            </div>
          </div>
        ))}
      </PropertiesGrid>
    </div>
  );
};

export default AllBookings;
