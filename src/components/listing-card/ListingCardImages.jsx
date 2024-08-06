const ListingCardImages = ({ src, alt = "listing image" }) => {
  return (
    <div className="w-full aspect-square rounded-2xl overflow-hidden">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ListingCardImages;
