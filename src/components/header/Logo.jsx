import { Link } from "react-router-dom";
import LogoFullIcon from "../icons/LogoFullIcon";
import LogoIcon from "../icons/LogoIcon";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex-[0.5] lg:flex-[1] text-primary-900 hidden md:flex"
    >
      <LogoFullIcon className="hidden xl:flex" />
      <LogoIcon className="hidden md:flex xl:hidden" />
    </Link>
  );
};

export default Logo;
