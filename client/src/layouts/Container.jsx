import usePageInfo from "../hooks/usePageInfo";

const Container = ({ children }) => {
  const { isSinglePropertyPage, isMessagesPage } = usePageInfo();

  return (
    <div
      className={`
        mx-auto
        w-full
        h-full
        px-4
        md:px-[40px]
        max-w-[1600px]
        
        ${
          isSinglePropertyPage
            ? "xl:px-[160px]"
            : isMessagesPage
            ? "xl:px-[40px] 2xl:px-[80px]"
            : "xl:px-[80px] "
        }
      `}
    >
      {children}
    </div>
  );
};

export default Container;
