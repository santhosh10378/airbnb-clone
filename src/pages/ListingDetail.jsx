import CustomButton from "../components/elements/CustomButton";
import ChevronLeftIcon from "../components/icons/ChevronLeftIcon";
import usePageInfo from "../hooks/usePageInfo";

const ListingDetail = () => {
  const { goBack } = usePageInfo();

  return (
    <>
      <section className="flex flex-col gap-3">
        <CustomButton
          variant="primary-link"
          className="lg:hidden"
          onClick={goBack}
        >
          <ChevronLeftIcon className="size-5" />
        </CustomButton>

        <h1>Listing Title</h1>
      </section>
    </>
  );
};

export default ListingDetail;
