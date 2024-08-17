import { useModal } from "../../../context/ModalContext";
import AmenitiesModal from "../modal-objects/AmenitiesModal";
import CreateFavoriteModal from "../modal-objects/CreateFavoriteModal";
import CreateWishListModal from "../modal-objects/CreateWishListModal";
import DescriptionModal from "../modal-objects/DescriptionModal";
import DesktopSearchModal from "../modal-objects/DesktopSearchModal";
import FiltersModal from "../modal-objects/FiltersModal";
import LoginModal from "../modal-objects/LoginModal";
import MobileSearchModal from "../modal-objects/MobileSearchModal";
import NewPropertyModal from "../modal-objects/NewPropertyModal";
import RegisterModal from "../modal-objects/RegisterModal";
import ReservationModal from "../modal-objects/ReservationModal";
import SearchModal from "../modal-objects/SearchModal";

const modalLookUp = {
  DesktopSearchModal: DesktopSearchModal,
  MobileSearchModal: MobileSearchModal,
  SearchModal: SearchModal,
  NewPropertyModal: NewPropertyModal,
  FiltersModal: FiltersModal,
  RegisterModal: RegisterModal,
  LoginModal: LoginModal,
  AmenitiesModal: AmenitiesModal,
  DescriptionModal: DescriptionModal,
  ReservationModal: ReservationModal,
  CreateWishListModal: CreateWishListModal,
  CreateFavoriteModal: CreateFavoriteModal,
};

const ModalManager = () => {
  const { modal } = useModal();

  if (!modal) return null;

  const Modal = modalLookUp[modal];

  return <Modal />;
};

export default ModalManager;
