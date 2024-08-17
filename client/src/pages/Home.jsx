import useFetch from "../hooks/useFetch";
import usePageInfo from "../hooks/usePageInfo";
import Container from "../layouts/Container";
import PropertiesGrid from "../layouts/PropertiesGrid";
import LoadingMessage from "../components/common/LoadingMessage";
import EmptyState from "../components/common/EmptyState";
import PropertyCard from "../components/properties/PropertyCard";

const Home = () => {
  const { search } = usePageInfo();
  const { data, loading, error } = useFetch(`/properties${search}`);

  return (
    <Container>
      {loading && <LoadingMessage />}

      {!loading && !error && data?.length > 0 && (
        <div className="pb-24">
          <PropertiesGrid>
            {data.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </PropertiesGrid>
        </div>
      )}
      {!loading && !error && data?.length === 0 && (
        <EmptyState
          title="No Properties Found"
          subtitle="We couldn't find any properties matching your search."
          desc="Try adjusting your filters or check back later to see updated listings."
        />
      )}
    </Container>
  );
};

export default Home;
