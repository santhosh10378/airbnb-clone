import { twMerge } from "tailwind-merge";

const Input = ({
  type = "text",
  id,
  placeholder,
  label,
  register,
  error,
  onChange,
  value,
  inputClass,
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor="Username"
        className={twMerge(
          `relative block rounded-md border focus-within:ring-1 `,
          error
            ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-500"
            : "border-secondary-300 focus-within:border-secondary-900 focus-within:ring-secondary-900"
        )}
      >
        {register && (
          <input
            type={type}
            id={id}
            {...register(id)}
            className={twMerge(
              "p-3 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0",
              inputClass
            )}
            placeholder={placeholder || label}
          />
        )}

        {!register && (
          <span className="text-sm pl-3 text-secondary-500">{label}</span>
        )}

        {!register && (
          <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className={twMerge(
              "p-3 pt-1 w-full peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0",
              inputClass
            )}
            placeholder={placeholder || label}
          />
        )}

        {register && (
          <span
            className={twMerge(
              "pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-secondary-600 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs"
            )}
          >
            {label}
          </span>
        )}
      </label>

      {error && (
        <span className="text-red-500 font-medium text-sm mt-1">{error}</span>
      )}
    </div>
  );
};

export default Input;
