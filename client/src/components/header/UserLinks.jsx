import { Link } from "react-router-dom";

import { useModal } from "../../context/ModalContext";
import { useAuth } from "../../context/AuthContext";
import usePageInfo from "../../hooks/usePageInfo";
import Button from "../elements/Button";

const UserLinks = () => {
  const { navLinks } = usePageInfo();
  const { openModal } = useModal();
  const { user, logoutUser } = useAuth();

  return (
    <nav className="w-full flex items-center justify-end ">
      {user && (
        <ul className="w-[70%]  bg-white shadow-custom-shadow-1 rounded-xl overflow-hidden">
          <li>
            <Button
              variant="primary-ghost"
              className="w-full rounded-none"
              onClick={() => openModal("NewPropertyModal")}
            >
              <span className="w-full text-left ">Airbnb your home</span>
            </Button>
          </li>

          {navLinks
            .filter((item) => item.isDesk)
            .map((link, i) => (
              <li key={link.pathname}>
                <Button variant="primary-ghost" className="w-full rounded-none">
                  <Link to={link.pathname} className={`text-left w-full`}>
                    {link.label}
                  </Link>
                </Button>
                {(i === 1 || i === 4) && <hr />}
              </li>
            ))}

          <li>
            <Button
              onClick={logoutUser}
              variant="primary-ghost"
              className="w-full rounded-none"
            >
              <span className="w-full text-left text-red-500">Sign Out</span>
            </Button>
          </li>
        </ul>
      )}

      {!user && (
        <ul className="w-[50%] bg-white shadow-custom-shadow-1 rounded-xl overflow-hidden">
          <li>
            <Button
              onClick={() => openModal("RegisterModal")}
              variant="primary-ghost"
              className="w-full rounded-none"
            >
              <span className="w-full text-left ">Sign Up</span>
            </Button>
          </li>
          <li>
            <Button
              onClick={() => openModal("LoginModal")}
              variant="primary-ghost"
              className="w-full rounded-none"
            >
              <span className="w-full text-left ">Sign In</span>
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default UserLinks;
