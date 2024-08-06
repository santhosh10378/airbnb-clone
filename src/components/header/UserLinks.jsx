import { Link } from "react-router-dom";
import usePageInfo from "../../hooks/usePageInfo";
import CustomButton from "../elements/CustomButton";
import { useModal } from "../../context/ModalContext";
import { useAuth } from "../../context/AuthContext";

const UserLinks = () => {
  const { navLinks } = usePageInfo();
  const { openModal } = useModal();
  const { user } = useAuth();

  return (
    <nav className="w-full flex items-center justify-end ">
      {user && (
        <ul className="w-[70%] z-20 bg-white shadow-primary-shadow rounded-xl overflow-hidden">
          <li>
            <CustomButton
              variant="primary-ghost"
              className="w-full rounded-none"
              onClick={() => openModal("NewListingModal")}
            >
              <span className="w-full text-left ">Airbnb your home</span>
            </CustomButton>
          </li>

          {navLinks.map((link, i) => (
            <li key={link.pathname}>
              <CustomButton
                variant="primary-ghost"
                className="w-full rounded-none"
              >
                <Link to={link.pathname} className={`text-left w-full`}>
                  {link.label}
                </Link>
              </CustomButton>
              {(i === 2 || i === 4) && <hr />}
            </li>
          ))}

          <li>
            <CustomButton
              variant="primary-ghost"
              className="w-full rounded-none"
            >
              <span className="w-full text-left text-red-500">Sign Out</span>
            </CustomButton>
          </li>
        </ul>
      )}

      {!user && (
        <ul className="w-[50%] bg-white shadow-primary-shadow rounded-xl overflow-hidden">
          <li>
            <CustomButton
              variant="primary-ghost"
              className="w-full rounded-none"
            >
              <span className="w-full text-left ">Sign Up</span>
            </CustomButton>
          </li>
          <li>
            <CustomButton
              variant="primary-ghost"
              className="w-full rounded-none"
            >
              <span className="w-full text-left ">Sign In</span>
            </CustomButton>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default UserLinks;
