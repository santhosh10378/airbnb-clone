import { twMerge } from "tailwind-merge";
import { useMemo } from "react";

const CustomButton = ({
  variant = "primary",
  type = "button",
  disabled,
  className,
  children,
  onClick,
}) => {
  const variantClass = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-primary-900 text-white border border-primary-900 hover:opacity-80";

      case "secondary":
        return "bg-secondary-900 text-white border border-secondary-900 hover:opacity-80";

      case "primary-gradient":
        return "bg-primary-gradient text-white border border-primary-800 hover:opacity-80";

      case "secondary-gradient":
        return "bg-secondary-gradient text-white border border-secondary-900 hover:opacity-80";

      case "primary-outlined":
        return "text-secondary-900 border border-secondary-900 hover:bg-zinc100";

      case "secondary-outlined":
        return "text-secondary-900 border border-secondary-500 hover:bg-zinc100";

      case "primary-ghost":
        return "text-secondary-900 hover:bg-zinc100 w-max";

      case "primary-link":
        return "text-secondary-900 hover:underline p-0 w-max";

      case "secondary-link":
        return "text-secondary-700 underline p-0 w-max";

      default:
        return "";
    }
  }, [variant]);

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={twMerge(
        "transition w-full rounded-md p-3 font-medium flex items-center justify-center gap-2 text-sm",
        variantClass,
        className
      )}
    >
      {children}
    </button>
  );
};

export default CustomButton;
