import { useAuth } from "../context/AuthContext";
import Container from "../layouts/Container";
import LoadingMessage from "../components/common/LoadingMessage";
import EmptyState from "../components/common/EmptyState";
import PropertiesGrid from "../layouts/PropertiesGrid";
import WishlistCard from "../components/wishlists/WishlistCard";
import { useNavigate } from "react-router-dom";

const Wishlists = () => {
  const { user, loading: userLoading, error: userError } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      {userLoading && <LoadingMessage text="Loading your wishlists..." />}

      {!userLoading && userError && (
        <EmptyState
          title="Error"
          subtitle="We encountered an issue while loading your wishlists. Please try again."
        />
      )}

      {!userLoading && !userError && user.wishlists?.length > 0 && (
        <div className="space-y-5 pb-24">
          <div>
            <h2>Your Wishlists</h2>
            <p className="text-gray-600">
              Browse through the properties you've earmarked as favorites.
              Manage your wishlist easily to plan your next booking.
            </p>
          </div>
          <PropertiesGrid>
            {user.wishlists.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/account/wishlists/${item?.id}`)}
              >
                <WishlistCard wishlist={item} />
              </div>
            ))}
          </PropertiesGrid>
        </div>
      )}

      {!userLoading && !userError && user.wishlists?.length === 0 && (
        <EmptyState
          title="No Wishlists Available"
          subtitle="You haven’t added any properties to your wishlists. Begin by selecting your top picks!"
        />
      )}
    </Container>
  );
};

export default Wishlists;
