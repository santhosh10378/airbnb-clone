import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import Container from "../layouts/Container";
import LoadingMessage from "../components/common/LoadingMessage";
import EmptyState from "../components/common/EmptyState";
import AllBookings from "../components/properties/AllBookings";

const Bookings = () => {
  const { user } = useAuth();

  const {
    data: bookingsData,
    loading: bookingsLoading,
    error: bookingsError,
    fetchData: fetchBookingsData,
  } = useFetch(`/bookings?hostId=${user?.id}`);

  return (
    <Container>
      {bookingsLoading && <LoadingMessage text="Loading your bookings..." />}

      {!bookingsLoading && bookingsError && (
        <EmptyState
          title="Error"
          subtitle="Something went wrong while fetching your bookings."
        />
      )}

      {!bookingsLoading && !bookingsError && bookingsData?.length > 0 && (
        <div className="space-y-5 pb-24">
          <div>
            <h2>Manage Your Property Bookings</h2>
            <p className=" text-gray-600">
              View and manage all bookings for your properties in one place.
              Check the status of your reservations, handle cancellations, and
              confirm new bookings with ease.
            </p>
          </div>
          <AllBookings bookings={bookingsData} fetchData={fetchBookingsData} />
        </div>
      )}

      {!bookingsLoading && !bookingsError && bookingsData?.length === 0 && (
        <EmptyState
          title="No Bookings Found"
          subtitle="You don't have any bookings yet. Start accepting reservations to manage them here."
        />
      )}
    </Container>
  );
};

export default Bookings;
