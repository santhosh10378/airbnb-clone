import { motion } from "framer-motion";
import CloseIcon from "../../icons/CloseIcon";
import { useModal } from "../../../context/ModalContext";
import CustomButton from "../../elements/CustomButton";

const Modal = ({ title = "Modal", children }) => {
  const { closeModal } = useModal();

  return (
    <dialog className="fixed inset-0 z-30 w-full h-screen flex items-center justify-center bg-black/70">
      <motion.div
        className="bg-white w-full h-full md:w-auto md:h-auto md:min-w-[550px] md:max-w-[780px] md:max-h-[85vh] md:rounded-lg"
        initial={{ opacity: 1, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full h-full">
          <CustomButton
            variant="primary-ghost"
            className="p-1 absolute top-5 left-5"
            onClick={closeModal}
          >
            <CloseIcon className="size-5" />
          </CustomButton>
          <div className="p-5">
            <h3 className="text-center">{title}</h3>
          </div>
          <hr />
          <div className="p-5">{children}</div>
        </div>
      </motion.div>
    </dialog>
  );
};

export default Modal;
