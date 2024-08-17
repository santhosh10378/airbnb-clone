const PropertyDetailsSpecs = ({ property }) => {
  return (
    <>
      <ul className="flex items-center gap-1 text-secondary-600">
        <li>{`${property?.noOfBedrooms} bedrooms •`}</li>
        <li>{`${property?.noOfBeds} beds •`}</li>
        <li>{`${property?.noOfBathrooms} bathrooms •`}</li>
        <li>{`${property?.noOfGuests} guests`}</li>
      </ul>
    </>
  );
};

export default PropertyDetailsSpecs;
