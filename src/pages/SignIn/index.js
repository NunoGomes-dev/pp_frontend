import { useContext } from "react";
import { useForm } from "react-hook-form";
import pp_logo from "../../assets/pp_logo.png";
import { AuthContext } from "../../context/AuthContext";
import { Button, Container, Flex, Image, Input, Label } from "./styles";

export const SignIn = () => {
  const { handleSubmit, register } = useForm();
  const { handleLogin, isLoading } = useContext(AuthContext);

  const loginHandler = ({ email, password }) => {
    handleLogin({ email, password });
  };

  return (
    <Flex
      width="100%"
      height="100%"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Image src={pp_logo} alt="PeçaAPeça" />
        <form onSubmit={handleSubmit(loginHandler)}>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" name="email" {...register("email")} />
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
          >
            <Label htmlFor="pw">Password</Label>
            <Input
              type="password"
              id="pw"
              name="pw"
              {...register("password")}
            />
          </Flex>
          <Button type="submit">Submit</Button>
          {isLoading && <div>isLoading</div>}
        </form>
      </Container>
    </Flex>
  );
};
