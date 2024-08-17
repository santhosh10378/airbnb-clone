import { ChevronLeftIcon } from "../assets";
import Button from "../components/elements/Button";
import PropertyCardWishlist from "../components/properties/PropertyCardWishlist";
import PropertyDetailsAmenities from "../components/properties/PropertyDetailsAmenities";
import PropertyDetailsDescription from "../components/properties/PropertyDetailsDescription";
import PropertyDetailsImages from "../components/properties/PropertyDetailsImages";
import PropertyDetailsSpecs from "../components/properties/PropertyDetailsSpecs";
import PropertyImagesCarousel from "../components/properties/PropertyImagesCarousel";
import PropertyReservation from "../components/properties/PropertyReservation";
import useFetch from "../hooks/useFetch";
import usePageInfo from "../hooks/usePageInfo";
import Container from "../layouts/Container";

const PropertyDetails = () => {
  const { params, goBack } = usePageInfo();
  const { data } = useFetch(`/properties/${params?.id}`);
  console.log(data);

  return (
    <Container>
      <div className="flex flex-col gap-3 pb-28 md:pb-14 w-full h-auto">
        <section className="flex flex-col gap-3 ">
          <Button
            onClick={goBack}
            className="lg:hidden p-[4px]"
            variant="primary-ghost"
          >
            <ChevronLeftIcon className="size-4" />
          </Button>

          <div className="flex items-center justify-between">
            <h1>{data?.title}</h1>
          </div>
        </section>

        <section className="flex items-start gap-10 ">
          <div className="flex-[2] flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <div className="hidden md:block">
                <PropertyDetailsImages property={data} />
              </div>
              <div className="md:hidden rounded-2xl overflow-hidden">
                <PropertyImagesCarousel property={data} />
              </div>
              <div className="flex items-center justify-between">
                <PropertyDetailsSpecs property={data} />
                <PropertyCardWishlist property={data} />
              </div>

              <hr />
            </div>

            <PropertyDetailsDescription property={data} />
            <hr />
            <PropertyDetailsAmenities property={data} />
          </div>
          <div className="flex-[1] hidden lg:block sticky top-[100px]">
            <PropertyReservation />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default PropertyDetails;
