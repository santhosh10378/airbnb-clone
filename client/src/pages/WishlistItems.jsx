import useFetch from "../hooks/useFetch";
import usePageInfo from "../hooks/usePageInfo";
import Container from "../layouts/Container";
import PropertiesGrid from "../layouts/PropertiesGrid";
import LoadingMessage from "../components/common/LoadingMessage";
import EmptyState from "../components/common/EmptyState";
import PropertyCard from "../components/properties/PropertyCard";

const WishlistItems = () => {
  const { params } = usePageInfo();
  const { data, loading, error, fetchData } = useFetch(
    `/wishlists/${params.id}`
  );

  return (
    <Container>
      {loading && <LoadingMessage text="Loading your wishlist items..." />}

      {!loading && error && (
        <EmptyState
          title="Error"
          subtitle="There was an issue retrieving your wishlist items. Please try again later."
        />
      )}

      {!loading && !error && data?.properties?.length > 0 && (
        <div className="space-y-5 pb-24">
          <div>
            <h2>Your Favorite Properties</h2>
            <p className="text-gray-600">
              Discover the properties you’ve marked as favorites. Keep them
              organized for future bookings and easy access.
            </p>
          </div>

          <PropertiesGrid>
            {data?.properties?.map((item) => (
              <div key={item.id}>
                <PropertyCard property={item} refetchData={fetchData} />
              </div>
            ))}
          </PropertiesGrid>
        </div>
      )}

      {!loading && !error && data?.properties?.length === 0 && (
        <EmptyState
          title="No Wishlist Items Found"
          subtitle="It looks like you haven't saved any properties to your wishlist yet. Start adding your favorites today!"
        />
      )}
    </Container>
  );
};

export default WishlistItems;
