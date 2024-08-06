import ListingCard from "../components/listing-card/ListingCard";

const Home = () => {
  return (
    <div className="h-full">
      <section
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          xl:grid-cols-5 
          2xl:grid-cols-6 
          gap-x-6 
          gap-y-12
          pb-20
        "
      >
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </section>
    </div>
  );
};

export default Home;
