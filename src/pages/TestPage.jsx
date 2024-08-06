import { useForm } from "react-hook-form";
import CustomButton from "../components/elements/CustomButton";
import CustomFileInput from "../components/elements/CustomFileInput";
import CustomInput from "../components/elements/CustomInput";
import { useModal } from "../context/ModalContext";

const TestPage = () => {
  const { openModal } = useModal();

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center justify-center h-screen gap-20">
      <div className="w-[200px] space-y-4">
        <CustomButton>Primary</CustomButton>
        <CustomButton variant="primary-gradient">Primary Gradient</CustomButton>
        <CustomButton variant="secondary">Secondary</CustomButton>
        <CustomButton variant="secondary-gradient">
          Secondary Gradient
        </CustomButton>
        <CustomButton variant="primary-outlined">Primary Outlined</CustomButton>
        <CustomButton variant="secondary-outlined">
          Secondary Outlined
        </CustomButton>
        <CustomButton variant="primary-ghost">Primary Ghost</CustomButton>
        <CustomButton variant="primary-link">Primary Link</CustomButton>
        <CustomButton variant="secondary-link">Secondary Link</CustomButton>
      </div>

      <div className="w-[200px] space-y-4">
        <CustomInput
          id="username"
          type="text"
          label="Username"
          register={register}
          error={errors.username?.message}
        />
        <CustomFileInput
          id="images"
          label="Images"
          register={register}
          error={errors.images?.message}
          multiple
        />
      </div>

      <div className="w-[200px] space-y-4">
        <h1>h1 - 26px</h1>
        <h2>h2 - 22px</h2>
        <h3>h3 - 16px</h3>
        <p className="text-[#6A6A6A]">Text Color</p>
      </div>
    </div>
  );
};

export default TestPage;
