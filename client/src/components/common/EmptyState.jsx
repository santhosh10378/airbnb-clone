import { motion } from "framer-motion";
import Heading from "./Heading";
import { twMerge } from "tailwind-merge";

const EmptyState = ({
  title,
  icon,
  subtitle,
  desc,
  titleClass,
  subtitleClass,
  descClass,
  children,
}) => {
  return (
    <section className="flex flex-col items-center justify-center h-full p-4">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {icon && { icon }}
      </motion.div>

      <Heading
        title={title}
        subtitle={subtitle}
        subtitleClass={subtitleClass}
        titleClass={titleClass}
      />

      {desc && (
        <p
          className={twMerge(
            "text-base text-center text-gray-500 mb-2",
            descClass
          )}
        >
          {desc}
        </p>
      )}
      {children}
    </section>
  );
};

export default EmptyState;
