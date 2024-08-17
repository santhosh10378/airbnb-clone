import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import Container from "../layouts/Container";
import LoadingMessage from "../components/common/LoadingMessage";
import EmptyState from "../components/common/EmptyState";
import AllTrips from "../components/properties/AllTrips";

const Trips = () => {
  const { user } = useAuth();

  const {
    data: tripsData,
    loading: tripsLoading,
    error: tripsError,
    fetchData: fetchTripsData,
  } = useFetch(`/bookings?userId=${user?.id}`);

  return (
    <Container>
      {tripsLoading && <LoadingMessage text="Loading your trips..." />}

      {!tripsLoading && tripsError && (
        <EmptyState
          title="Error"
          subtitle="Something went wrong while fetching your trips."
        />
      )}

      {!tripsLoading && !tripsError && tripsData?.length > 0 && (
        <div className="space-y-5 pb-24">
          <div>
            <h2>Explore Your Travel Adventures</h2>
            <p className=" text-gray-600">
              Keep track of all your trips, from upcoming vacations to completed
              journeys. Manage your travel plans efficiently and stay organized
              with your trip details.
            </p>
          </div>
          <AllTrips trips={tripsData} fetchData={fetchTripsData} />
        </div>
      )}

      {!tripsLoading && !tripsError && tripsData?.length === 0 && (
        <EmptyState
          title="No Trips Found"
          subtitle="You don't have any trips scheduled or completed yet. Check back later or start planning your next adventure!"
        />
      )}
    </Container>
  );
};

export default Trips;
