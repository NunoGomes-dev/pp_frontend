import { useForm } from "react-hook-form";
import pp_logo from "../../assets/pp_logo.png";
import { Stack, VStack, Image, Card, SignUpForm } from "../../components";
import useSignUp from "../../hooks/auth/useSignUp";

export const SignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = useSignUp();

  return (
    <Stack className="w-full h-full justify-center items-center text-black">
      <Card>
        <VStack className="items-center gap-8">
          <Image src={pp_logo} alt="PeçaAPeça" className={"h-[150px w-auto]"} />
          <SignUpForm
            handleSubmit={handleSubmit}
            mutate={mutate}
            register={register}
            errors={errors}
            isLoading={isLoading}
          />
        </VStack>
      </Card>
    </Stack>
  );
};
