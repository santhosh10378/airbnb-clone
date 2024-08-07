import { useModal } from "../../../context/ModalContext";
import AmenitiesModal from "../modal-objects/AmenitiesModal";
import DescriptionModal from "../modal-objects/DescriptionModal";
import DesktopSearchModal from "../modal-objects/DesktopSearchModal";
import FiltersModal from "../modal-objects/FiltersModal";
import LoginModal from "../modal-objects/LoginModal";
import MobileSearchModal from "../modal-objects/MobileSearchModal";
import NewListingModal from "../modal-objects/NewListingModal";
import RegisterModal from "../modal-objects/RegisterModal";
import SearchModal from "../modal-objects/SearchModal";

const modalLookUp = {
  DesktopSearchModal: DesktopSearchModal,
  MobileSearchModal: MobileSearchModal,
  SearchModal: SearchModal,
  NewListingModal: NewListingModal,
  FiltersModal: FiltersModal,
  RegisterModal: RegisterModal,
  LoginModal: LoginModal,
  AmenitiesModal: AmenitiesModal,
  DescriptionModal: DescriptionModal,
};

const ModalManager = () => {
  const { modal } = useModal();

  if (!modal) return null;

  const Modal = modalLookUp[modal];

  return <Modal />;
};

export default ModalManager;
