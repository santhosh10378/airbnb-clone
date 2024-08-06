import CustomButton from "../elements/CustomButton";

const ListingCardActionButtons = ({ trip, booking, myListing }) => (
  <div className="flex flex-col gap-2">
    {trip && <CustomButton className="p-2">Cancel Trip</CustomButton>}

    {booking && <CustomButton className="p-2">Cancel Booking</CustomButton>}

    {myListing && (
      <>
        <CustomButton variant="secondary-gradient" className="p-2">
          Update Listing
        </CustomButton>
        <CustomButton className="p-2">Delete Listing</CustomButton>
      </>
    )}
  </div>
);

export default ListingCardActionButtons;
