import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (name) => {
    setModal(name);
  };

  const closeModal = () => setModal(null);

  return (
    <ModalContext.Provider
      value={{ modal, openModal, closeModal, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
