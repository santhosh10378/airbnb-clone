import { useLocation } from "react-router-dom";
import HeartIcon from "../components/icons/HeartIcon";
import SearchIcon from "../components/icons/SearchIcon";
import LogoIcon from "../components/icons/LogoIcon";
import MessagesIcon from "../components/icons/MessagesIcon";
import ProfileIcon from "../components/icons/ProfileIcon";

const usePageInfo = () => {
  const { pathname } = useLocation();

  const pageChecks = {
    isHomePage: pathname === "/",
    isSingleListingPage: pathname.startsWith("/listings/"),
    isAccountPage: pathname.startsWith("/account/"),
    isMessagesPage: pathname === "/account/messages",
    isTripsPage: pathname === "/account/trips",
    isWishlistsPage: pathname === "/account/wishlists",
    isMyListingsPage: pathname === "/account/listings",
    isProfilePage: pathname === "/account/profile",
  };

  const navLinks = [
    { pathname: "/account/wishlists", label: "Wishlists" },
    { pathname: "/account/trips", label: "Trips" },
    { pathname: "/account/listings", label: "Manage Listings" },
    { pathname: "/account/messages", label: "Messages" },
    { pathname: "/account/profile", label: "Profile" },
  ];

  const mobileNavLinks = [
    { pathname: "/", label: "Explore", icon: SearchIcon },
    { pathname: "/account/wishlists", label: "Wishlists", icon: HeartIcon },
    { pathname: "/account/trips", label: "Trips", icon: LogoIcon },
    {
      pathname: "/account/messages",
      label: "Messages",
      icon: MessagesIcon,
    },
    { pathname: "/account/profile", label: "Profile", icon: ProfileIcon },
  ];

  const goBack = () => {
    window.history.back();
  };

  return {
    ...pageChecks,
    pathname,
    navLinks,
    mobileNavLinks,
    goBack,
  };
};

export default usePageInfo;
