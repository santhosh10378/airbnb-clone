import usePageInfo from "../hooks/usePageInfo";

const Container = ({ children }) => {
  const { isSingleListingPage } = usePageInfo();

  return (
    <div
      className={`
        mx-auto
        w-full
        h-full
        px-4
        md:px-[40px]
        max-w-[1600px]
        ${isSingleListingPage ? "xl:px-[160px] " : "xl:px-[80px] "}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
