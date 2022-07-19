import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  InputLabel,
  VStack,
} from "../Design";

const Form = ({ handleSubmit, mutate, register, errors, isLoading }) => {
  return (
    <form onSubmit={handleSubmit(mutate)}>
      <VStack align="center" gap={4}>
        <HStack gap={4}>
          <FormControl>
            <InputLabel htmlFor="firstname" required>
              Primeiro nome
            </InputLabel>
            <Input
              type="text"
              id="firstname"
              name="firstname"
              {...register("firstname", {
                required: "Primeiro nome obrigatório",
              })}
              placeholder=""
            />
            <FormErrorMessage>{errors?.firstname?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="lastname" required>
              Último nome
            </InputLabel>
            <Input
              type="text"
              id="lastname"
              name="lastname"
              {...register("lastname", {
                required: "Último nome obrigatório",
              })}
              placeholder=""
            />
            <FormErrorMessage>{errors?.lastname?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        <HStack gap={4}>
          <FormControl>
            <InputLabel htmlFor="vat" required>
              NIF
            </InputLabel>
            <Input
              type="text"
              id="vat"
              name="vat"
              {...register("vat", { required: "NIF obrigatório" })}
              placeholder=""
            />
            <FormErrorMessage>{errors?.vat?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="phone" required>
              Contacto
            </InputLabel>
            <Input
              type="text"
              id="phone"
              name="phone"
              {...register("phone", { required: "Contacto obrigatório" })}
              placeholder=""
            />
            <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
          </FormControl>
        </HStack>
        <HStack gap={4}>
          <FormControl>
            <InputLabel htmlFor="email" required>
              Email
            </InputLabel>
            <Input
              type="text"
              id="email"
              name="email"
              {...register("email", { required: "Email obrigatório" })}
              placeholder=""
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="pw" required>
              Password
            </InputLabel>
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
        </HStack>
        <Button
          variant="solid"
          type="submit"
          isLoading={isLoading}
          loadingText="A entrar..."
        >
          Registar
        </Button>
        <Link to="/signin" style={{ textDecoration: "none" }}>
          <Box fontWeight="300" color="gray">
            Já tem conta?{" "}
            <span style={{ textDecoration: "underline" }}>Entrar</span>
          </Box>
        </Link>
      </VStack>
    </form>
  );
};

export default Form;
