import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import pp_logo from "../../assets/pp_logo.png";
import {
  Input,
  Button,
  InputLabel,
  Stack,
  VStack,
  Image,
  Card,
  FormControl,
  FormErrorMessage,
  Box,
} from "../../components";
import useSignIn from "../../hooks/auth/useSignIn";

export const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = useSignIn();

  return (
    <Stack
      width="full"
      height="full"
      justify="center"
      align="center"
      color="black"
    >
      <Card>
        <VStack justify="start" align="center" gap="8">
          <Image src={pp_logo} alt="PeçaAPeça" maxHeight="40%" width="auto" />
          <form onSubmit={handleSubmit(mutate)}>
            <VStack align="center">
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  {...register("email", {
                    required: "Email obrigatório",
                  })}
                  placeholder=""
                />
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="pw">Password</InputLabel>
                <Input
                  type="password"
                  id="pw"
                  name="pw"
                  {...register("password", {
                    required: "Password obrigatória",
                  })}
                  placeholder=""
                />
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
              </FormControl>
              <Button
                variant="solid"
                width="full"
                type="submit"
                isLoading={isLoading}
                loadingText="A entrar..."
              >
                Entrar
              </Button>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Box fontWeight="300" color="gray" textDecoration="underline">
                  Ainda não tem conta?
                </Box>
              </Link>
            </VStack>
          </form>
        </VStack>
      </Card>
    </Stack>
  );
};
