import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useNewPropertyForm } from "../../../context/NewPropertyContext";

const BasicInformation = () => {
  const { formData, updateForm } = useNewPropertyForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateForm(name, value);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between gap-10">
        <div className="w-full">
          <h3 className="text-lg font-semibold">Give Your Property a Title</h3>
          <p className="text-secondary-500 text-sm mb-3">
            Make it catchy and memorable – the first impression counts!
          </p>
          <input
            type="text"
            name="title"
            className="w-full border-2 border-gray-300 rounded-lg p-3 text-sm outline-none text-secondary-900"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold">Create Your Description</h3>
        <p className="text-secondary-500 text-sm mb-3">
          Highlight the unique features and amenities to attract guests!
        </p>
        <SimpleMDE
          className="rounded-lg"
          value={formData.description}
          onChange={(value) => updateForm("description", value)}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
