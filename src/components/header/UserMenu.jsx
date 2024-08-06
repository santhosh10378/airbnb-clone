import { useState } from "react";
import Avatar from "../common/Avatar";
import CustomButton from "../elements/CustomButton";
import MenuIcon from "../icons/MenuIcon";
import UserLinks from "./UserLinks";

const UserMenu = () => {
  const [openMenu, setopenMenu] = useState(false);

  const toggleMenu = () => {
    setopenMenu((prev) => !prev);
  };

  return (
    <div className="flex-[1] hidden md:flex items-center justify-end">
      <div
        onClick={toggleMenu}
        className="flex items-center justify-end gap-2 relative"
      >
        <CustomButton
          variant="primary-ghost"
          className="w-max rounded-full p-4"
        >
          Airbnb your home
        </CustomButton>

        <CustomButton
          variant="secondary-outlined"
          className="w-max rounded-full"
        >
          <MenuIcon className="size-5 text-secondary-800" />
          <Avatar />
        </CustomButton>

        {openMenu && (
          <div className="absolute top-[110%] right-0 w-full">
            <UserLinks />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
