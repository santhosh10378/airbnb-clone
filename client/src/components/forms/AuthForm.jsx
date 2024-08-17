import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useModal } from "../../context/ModalContext";
import { useAuth } from "../../context/AuthContext";
import Input from "../elements/Input";
import Button from "../elements/Button";

// Define Zod schema
const authSchema = z.object({
  firstName: z.string().min(2, "Name must be at least 2 characters").optional(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const AuthForm = ({ isLogin }) => {
  const { loginUser, registerUser, loading } = useAuth();

  const { openModal, closeModal } = useModal();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    if (isLogin) {
      await loginUser(data);
    } else {
      await registerUser(data);
    }

    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 h-[95vh] md:h-auto p-5"
    >
      <div className="space-y-5">
        {!isLogin && (
          <Input
            type="text"
            label="First Name"
            id="firstName"
            register={register}
            error={errors?.firstName?.message}
          />
        )}
        <Input
          type="email"
          label="Email"
          id="email"
          register={register}
          error={errors?.email?.message}
        />
        <Input
          type="password"
          label="Password"
          id="password"
          register={register}
          error={errors?.password?.message}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button disabled={loading} className="w-full" type="submit">
          Submit
        </Button>
        <div className="flex items-center justify-center gap-1">
          <span className="text-secondary-500 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <Button
            disabled={loading}
            onClick={() => {
              if (isLogin) {
                openModal("RegisterModal");
              } else {
                openModal("LoginModal");
              }
            }}
            variant="primary-link"
            className="text-sm"
          >
            {isLogin ? "Register" : "Login"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
