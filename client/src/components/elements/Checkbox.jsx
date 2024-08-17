import { CheckIcon } from "../../assets";

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label className="flex items-center gap-x-2 cursor-pointer transition">
      <input
        type="checkbox"
        className="hidden peer"
        value={value}
        onChange={onChange}
      />
      <div className="w-6 h-6 bg-secondary-200 text-secondary-200 rounded-md flex items-center justify-center peer-checked:bg-secondary-gradient peer-checked:text-white">
        <CheckIcon />
      </div>
      <span className="truncate">{label}</span>
    </label>
  );
};

export default Checkbox;
