import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";
import Button from "../elements/Button";

const PropertyCardActions = ({
  property,
  myProperty,
  trip,
  booking,
  refetchData,
}) => {
  const cancelTrip = async () => {
    try {
      await axiosInstance.put(`/bookings/${trip.id}/cancel`);
      toast.success(`Trip Cancelled`);
      refetchData();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const confirmBooking = async () => {
    try {
      await axiosInstance.put(`/bookings/${booking.id}/confirm`);
      toast.success("Trip Cancelled");
      refetchData();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const cancelBooking = async () => {
    try {
      await axiosInstance.put(`/bookings/${booking.id}/cancel`);
      toast.success(`BookingCancelled`);
      refetchData();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const deleteProperty = async () => {
    try {
      await axiosInstance.delete(`/properties/${property.id}`);
      toast.success("Booking Deleted");
      refetchData();
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="space-y-2">
      {myProperty && (
        <>
          <Button
            onClick={deleteProperty}
            variant="primary"
            className="w-full p-2"
          >
            Delete Property
          </Button>
        </>
      )}

      {trip && (
        <>
          <Button onClick={cancelTrip} variant="primary" className="w-full p-2">
            Cancel Trip
          </Button>
        </>
      )}

      {booking && (
        <>
          <Button
            onClick={confirmBooking}
            variant="secondary-gradient"
            className="w-full p-2"
          >
            Confirm Booking
          </Button>

          <Button
            onClick={cancelBooking}
            variant="primary-gradient"
            className="w-full p-2"
          >
            Cancel Booking
          </Button>
        </>
      )}
    </div>
  );
};

export default PropertyCardActions;
