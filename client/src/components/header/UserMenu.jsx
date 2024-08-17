import { useState } from "react";
import Avatar from "../common/Avatar";
import Button from "../elements/Button";
import UserLinks from "./UserLinks";
import { useModal } from "../../context/ModalContext";
import { MenuIcon } from "../../assets";

const UserMenu = () => {
  const [openMenu, setopenMenu] = useState(false);
  const { openModal } = useModal();
  const toggleMenu = () => {
    setopenMenu((prev) => !prev);
  };

  return (
    <div className="flex-[1] hidden md:flex items-center justify-end">
      <div className="flex items-center justify-end gap-2 relative">
        <Button
          onClick={() => openModal("NewPropertyModal")}
          variant="primary-ghost"
          className="rounded-full"
        >
          Airbnb your home
        </Button>

        <Button
          onClick={toggleMenu}
          variant="secondary-outlined"
          className="rounded-full"
        >
          <MenuIcon className="size-5 text-secondary-800" />
          <Avatar />
        </Button>

        {openMenu && (
          <div
            onClick={toggleMenu}
            className="absolute top-[110%] right-0 w-full"
          >
            <UserLinks />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
