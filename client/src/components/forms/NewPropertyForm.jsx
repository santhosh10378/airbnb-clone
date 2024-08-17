import toast from "react-hot-toast";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import Button from "../elements/Button";
import Amenities from "./steps/Amenities";
import BasicInformation from "./steps/BasicInformation";
import Location from "./steps/Location";
import Media from "./steps/Media";
import NearbyActivites from "./steps/NearbyActivites";
import PropertyType from "./steps/PropertyType";
import Specifications from "./steps/Specifications";
import PlaceType from "./steps/PlaceType";
import { useNewPropertyForm } from "../../context/NewPropertyContext";
import { useAuth } from "../../context/AuthContext";
import { useModal } from "../../context/ModalContext";
import usePageInfo from "../../hooks/usePageInfo";
import usePropertyAPIs from "../../hooks/usePropertyAPIs";
import PriceStep from "./steps/PriceStep";

const NewPropertyForm = () => {
  const steps = [
    <BasicInformation />,
    <PropertyType />,
    <PlaceType />,
    <Location />,
    <Specifications />,

    <Amenities />,
    <NearbyActivites />,
    <Media />,
    <PriceStep />,
  ];
  const { currentStep, nextStep, prevStep, isLastStep, isFirstStep, goToStep } =
    useMultiStepForm(steps.length);
  const { formData } = useNewPropertyForm();
  const { createProperty } = usePropertyAPIs();
  const { user } = useAuth();
  const { openModal, closeModal } = useModal();
  const { refreshPage } = usePageInfo();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      openModal("LoginModal");
    }

    const { images, media, ...other } = formData;
    console.log("formData", formData);

    if (!other.title || !other.description || !other.price) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const numericFields = [
      "price",
      "noOfBedrooms",
      "noOfBathrooms",
      "noOfBeds",
      "noOfAdults",
      "noOfChildren",
      "noOfInfants",
      "latitude",
      "longitude",
    ];

    numericFields.forEach((field) => {
      if (other[field]) {
        const value = parseFloat(other[field]);
        if (isNaN(value) || value < 0) {
          toast.error(`Invalid value for ${field}.`);
          return;
        }
        other[field] = value;
      }
    });

    const formDataToSend = new FormData();
    for (const key in other) {
      if (Array.isArray(other[key])) {
        other[key].forEach((item) => formDataToSend.append(key, item));
      } else {
        formDataToSend.append(key, other[key]);
      }
    }

    if (images && images.length > 0) {
      images.forEach((image) => formDataToSend.append("images", image));
    }

    formDataToSend.append("currency", "INR");

    const res = await createProperty({
      data: formDataToSend,
      multipart: true,
    });

    if (res.status === 201 || res.status === 200) {
      closeModal();
      refreshPage();
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border-t w-full flex flex-col justify-between  h-full"
    >
      <div className="flex-[1] p-6 overflow-y-auto scrollbar-hidden">
        {steps[currentStep]}
      </div>
      <div className="flex-[0.1] pb-[60px] md:pb-[70px] px-6 pt-1 md:pt-4 flex flex-col gap-5 border-t  border-secondary-300 ">
        <div className="hidden md:flex items-center w-full justify-center gap-5 flex-wrap h-full">
          {steps.map((step, i) => (
            <Button
              key={i}
              variant={
                currentStep === i ? "secondary-gradient" : "secondary-outlined"
              }
              onClick={() => goToStep(i)}
              className="p-1 rounded-full px-5"
            >
              {i + 1}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-between gap-5 w-full h-full">
          {!isFirstStep && (
            <Button
              className="w-full"
              onClick={prevStep}
              variant="primary-outlined"
            >
              Back
            </Button>
          )}
          {!isLastStep && (
            <Button className="w-full" onClick={nextStep}>
              Next
            </Button>
          )}
          {isLastStep && (
            <Button className="w-full" type="submit">
              Submit
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default NewPropertyForm;
