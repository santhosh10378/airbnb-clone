import { useModal } from "../../context/ModalContext";
import CustomButton from "../elements/CustomButton";
import SettingsIcon from "../icons/SettingsIcon";

const Filters = () => {
  const { openModal } = useModal();

  return (
    <CustomButton
      variant="secondary-outlined"
      className="rounded-full md:rounded-xl md:px-5 w-max md:py-4"
      onClick={() => openModal("FiltersModal")}
    >
      <SettingsIcon className="size-5 md:size-4 text-secondary-700" />
      <p className="hidden md:block">Filters</p>
    </CustomButton>
  );
};

export default Filters;
