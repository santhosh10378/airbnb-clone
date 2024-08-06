const CustomFileInput = ({
  multiple = true,
  id,
  placeholder,
  label,
  register,
  error,
}) => {
  return (
    <div>
      <label>
        <input type="file" multiple={multiple} hidden {...register(id)} />
        <div className="border border-dashed border-secondary-500 text-secondary-600 flex items-center justify-center gap-2 p-5 rounded-lg text-sm cursor-pointer">
          Upload
        </div>
      </label>

      {error && (
        <span className="text-red-500 font-medium text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

export default CustomFileInput;
