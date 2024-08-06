import ListingCard from "../components/listing-card/ListingCard";

const MyListings = () => {
  return (
    <div>
      <h1 className="mb-5">My Listings</h1>
      <section
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-3 
          xl:grid-cols-5 
          2xl:grid-cols-6 
          gap-x-8 
          gap-y-12
          pb-20
        "
      >
        <ListingCard myListing />
        <ListingCard myListing />
        <ListingCard myListing />
      </section>
    </div>
  );
};

export default MyListings;
