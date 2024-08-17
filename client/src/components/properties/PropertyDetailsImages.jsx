const PropertyDetailsImages = ({ property }) => {
  const images = property?.images || [];

  return (
    <div className="flex items-center justify-center h-[350px] gap-4">
      <div className="flex-[2] w-full h-full rounded-xl overflow-hidden">
        <img
          src={images[0]}
          alt="property image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-[0.7] w-full h-full grid grid-cols-1 grid-rows-3 gap-4">
        {images?.slice(1, 4).map((image) => (
          <div key={image} className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={image}
              alt="property image"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetailsImages;
