const ListingImagesGrid = () => {
  return (
    <>
      <div className="hidden w-full h-[350px] md:flex items-center gap-4">
        <div className="flex-[2] w-full h-full">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1096037653295365069/original/891de6bb-9646-4d45-ab99-b2146f55ebef.jpeg?im_w=1200"
            alt="listing image"
            className=" rounded-xl object-cover w-full h-full"
          />
        </div>

        <div className="flex-[0.7] w-full h-full grid grid-cols-1 grid-rows-3 gap-3">
          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1096037653295365069/original/891de6bb-9646-4d45-ab99-b2146f55ebef.jpeg?im_w=1200"
            alt="listing image"
            className="rounded-xl object-cover w-full h-full"
          />

          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1096037653295365069/original/891de6bb-9646-4d45-ab99-b2146f55ebef.jpeg?im_w=1200"
            alt="listing image"
            className="rounded-xl object-cover w-full h-full"
          />

          <img
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1096037653295365069/original/891de6bb-9646-4d45-ab99-b2146f55ebef.jpeg?im_w=1200"
            alt="listing image"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="md:hidden w-full h-[350px] overflow-hidden">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1096037653295365069/original/891de6bb-9646-4d45-ab99-b2146f55ebef.jpeg?im_w=1200"
          alt="listing image"
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>
    </>
  );
};

export default ListingImagesGrid;
