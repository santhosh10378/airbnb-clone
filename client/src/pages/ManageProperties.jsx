import { useAuth } from "../context/AuthContext";
import useFetch from "../hooks/useFetch";
import Container from "../layouts/Container";
import LoadingMessage from "../components/common/LoadingMessage";
import EmptyState from "../components/common/EmptyState";
import MyProperties from "../components/properties/MyProperties";

const ManageProperties = () => {
  const { user } = useAuth();
  const { data, loading, error, fetchData } = useFetch(
    `/properties?hostId=${user?.id}`
  );

  return (
    <Container>
      {loading && <LoadingMessage text="Loading properties..." />}

      {!loading && error && (
        <EmptyState
          title="Error"
          subtitle="Something went wrong while fetching properties."
        />
      )}

      {!loading && !error && data?.length > 0 && (
        <div className="space-y-5 pb-24">
          <MyProperties properties={data} fetchData={fetchData} />
        </div>
      )}

      {!loading && !error && data?.length === 0 && (
        <EmptyState
          title="No Properties Found"
          subtitle="You haven't added any properties yet. Please add some properties to manage them."
        />
      )}
    </Container>
  );
};

export default ManageProperties;
