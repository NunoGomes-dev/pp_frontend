import { useForm } from "react-hook-form";
import pp_logo from "../../assets/pp_logo.png";
import { Stack, VStack, Image, Card, SignInForm } from "../../components";
import useSignIn from "../../hooks/auth/useSignIn";

export const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = useSignIn();

  return (
    <Stack className="w-full h-full justify-center items-center text-black">
      <Card>
        <VStack className="items-center gap-8">
          <Image
            src={pp_logo}
            alt="PeçaAPeça"
            className={"max-h-[40%] w-auto"}
          />
          <SignInForm
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
