import DesktopSearchModal from "./DesktopSearchModal";
import MobileSearchModal from "./MobileSearchModal";

const SearchModal = () => {
  return (
    <>
      <div className="hidden md:block">
        <DesktopSearchModal />
      </div>
      <div className="md:hidden">
        <MobileSearchModal />
      </div>
    </>
  );
};

export default SearchModal;
