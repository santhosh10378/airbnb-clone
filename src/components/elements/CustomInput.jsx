import { twMerge } from "tailwind-merge";

const CustomInput = ({
  type = "text",
  id,
  placeholder,
  label,
  register,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor="Username"
        className={twMerge(
          `relative block rounded-md border focus-within:ring-1 `,
          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500"
            : "border-secondary-500 focus-within:border-secondary-900 focus-within:ring-secondary-900"
        )}
      >
        <input
          type={type}
          id={id}
          {...register(id)}
          className="p-3 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
          placeholder={placeholder || label}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-secondary-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {label}
        </span>
      </label>

      {error && (
        <span className="text-red-500 font-medium text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

export default CustomInput;
