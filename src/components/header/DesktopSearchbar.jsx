import { useModal } from "../../context/ModalContext";
import SearchV2Icon from "../icons/SearchV2Icon";

const DesktopSearchbar = () => {
  const { openModal } = useModal();

  return (
    <div className="flex-[2] hidden md:flex items-center justify-center">
      <div
        onClick={() => openModal("SearchModal")}
        className="flex border py-2 rounded-full items-center font-semibold transition cursor-pointer hover:shadow"
      >
        <p className="px-4">Anywhere</p>
        <p className="px-4 border-x">Anyweek</p>
        <div className="flex items-center gap-2 px-4 pr-2">
          <p className=" text-gray-500 font-normal">Add guests</p>
          <div className="rounded-full bg-primary-900 text-white p-2 flex items-center justify-center">
            <SearchV2Icon className="size-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopSearchbar;
