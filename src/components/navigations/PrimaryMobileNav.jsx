import { Link, useLocation } from "react-router-dom";
import usePageInfo from "../../hooks/usePageInfo";

const PrimaryMobileNav = () => {
  const { pathname } = useLocation();
  const { mobileNavLinks } = usePageInfo();

  return (
    <nav className="md:hidden fixed bg-white z-10 bottom-0 left-0 w-full h-[60px] border-t">
      <ul className="bg-white w-full h-full flex items-center justify-center gap-1">
        {mobileNavLinks.map((route, i) => (
          <li
            key={i}
            className={`${
              pathname === route.pathname
                ? "text-primary-900 font-semibold"
                : "text-secondary-600"
            } w-full transition hover:text-primary-900`}
          >
            <Link
              to={route.pathname}
              className="w-full flex flex-col gap-1 items-center justify-center cursor-pointer"
            >
              <route.icon className="size-5" />
              <p className="text-xs">{route.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryMobileNav;
