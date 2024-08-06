import { Outlet } from "react-router-dom";
import Container from "./Container";
import ModalManager from "../components/modals/modal-managers/ModalManager";
import Logo from "../components/header/Logo";
import DesktopSearchbar from "../components/header/DesktopSearchbar";
import MobileSearchbar from "../components/header/MobileSearchbar";
import UserMenu from "../components/header/UserMenu";
import PrimaryMobileNav from "../components/navigations/PrimaryMobileNav";
import SingleListingNav from "../components/navigations/SingleListingNav";
import usePageInfo from "../hooks/usePageInfo";
import Filters from "../components/header/Filters";
import QucikFilters from "../components/header/QucikFilters";
import { twMerge } from "tailwind-merge";
import ContextManager from "../context/ContextManager";

const MainLayout = () => {
  const { isSingleListingPage, isHomePage } = usePageInfo();
  return (
    <ContextManager>
      <header className="h-[80px] z-10 md:border-b w-full fixed top-0 left-0 bg-white">
        <Container>
          <div className="h-full flex items-center justify-between gap-3 md:gap-0 py-2 text-sm">
            <Logo />
            <DesktopSearchbar />
            <MobileSearchbar />
            <UserMenu />
            <div className="md:hidden">
              <Filters />
            </div>
          </div>
        </Container>

        {isSingleListingPage && <SingleListingNav />}
        {!isSingleListingPage && <PrimaryMobileNav />}
        {isHomePage && <QucikFilters />}
      </header>

      <main
        className={twMerge(
          "h-screen z-0 w-full",
          isHomePage
            ? "pb-[80px] pt-[180px] md:pt-[190px]"
            : "pb-[80px] pt-[90px]"
        )}
      >
        <Container>
          <Outlet />
        </Container>
        <ModalManager />
      </main>
    </ContextManager>
  );
};

export default MainLayout;
