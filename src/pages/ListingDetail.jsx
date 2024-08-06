import { useState } from "react";
import CustomButton from "../components/elements/CustomButton";
import ChevronLeftIcon from "../components/icons/ChevronLeftIcon";
import ListingAmenities from "../components/listing-details/ListingAmenities";
import ListingDescription from "../components/listing-details/ListingDescription";
import ListingHostInfo from "../components/listing-details/ListingHostInfo";
import ListingImagesGrid from "../components/listing-details/ListingImagesGrid";
import ListingInfoText from "../components/listing-details/ListingInfoText";
import ListingReservation from "../components/listing-details/ListingReservation";
import usePageInfo from "../hooks/usePageInfo";

const ListingDetail = () => {
  const { goBack } = usePageInfo();

  return (
    <>
      <section className="flex items-start gap-10 pt-5 pb-28">
        <div className="flex-[2] flex flex-col gap-5">
          <CustomButton
            variant="primary-link"
            className="lg:hidden"
            onClick={goBack}
          >
            <ChevronLeftIcon className="size-5" />
          </CustomButton>

          <h1>Listing Title</h1>
          <ListingImagesGrid />
          <ListingInfoText />
          <hr />
          <ListingHostInfo />
          <hr />
          <ListingDescription />
          <hr />
          <ListingAmenities />
        </div>

        <div className="hidden md:flex flex-[1] sticky top-[110px]">
          <ListingReservation />
        </div>
      </section>
    </>
  );
};

export default ListingDetail;
