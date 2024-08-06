import Container from "../../layouts/Container";
import { formatCurrency } from "../../utils/utils";
import CustomButton from "../elements/CustomButton";

const SingleListingNav = () => {
  return (
    <div className="lg:hidden fixed bg-white z-10 bottom-0 left-0 w-full h-[65px] border-t">
      <Container>
        <div className="h-full w-full flex items-center justify-between">
          <div>
            <p>
              <span className="font-semibold text-lg text-secondary-800">
                {formatCurrency({ amount: 2500 })}
              </span>
              &nbsp;
              <span className="text-secondary-600 text-sm">night</span>
            </p>
          </div>
          <CustomButton variant="primary-gradient" className="w-max px-7">
            Reserve
          </CustomButton>
        </div>
      </Container>
    </div>
  );
};

export default SingleListingNav;
