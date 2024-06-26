import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputLabel,
  VStack,
} from "../Design";

const Form = ({ handleSubmit, mutate, register, errors, isLoading }) => {
  return (
    <form onSubmit={handleSubmit(mutate)}>
      <VStack className="items-center gap-4">
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
          className="w-full"
          type="submit"
          isLoading={isLoading}
          loadingText="A entrar..."
        >
          Entrar
        </Button>
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Box className="font-light text-gray-500 underline">
            Ainda não tem conta?
          </Box>
        </Link>
      </VStack>
    </form>
  );
};

export default Form;
