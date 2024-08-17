import NewPropertyForm from "../../forms/NewPropertyForm";
import Modal from "../modal-templates/Modal";

const NewPropertyModal = () => {
  return (
    <Modal title="Airbnb your home">
      <NewPropertyForm />
    </Modal>
  );
};

export default NewPropertyModal;
