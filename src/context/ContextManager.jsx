import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./AuthContext";
import { SearchQueryProvider } from "./SearchQueryContext";
import { ModalProvider } from "./ModalContext";

const ContextManager = ({ children }) => {
  return (
    <AuthProvider>
      <SearchQueryProvider>
        <ModalProvider>
          <Toaster />
          {children}
        </ModalProvider>
      </SearchQueryProvider>
    </AuthProvider>
  );
};

export default ContextManager;
