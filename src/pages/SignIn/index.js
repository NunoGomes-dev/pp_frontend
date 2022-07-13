import { useForm } from "react-hook-form";
import pp_logo from "../../assets/pp_logo.png";
import {
  Input,
  Button,
  InputLabel,
  Stack,
  VStack,
  Image,
} from "../../components";
import useSignIn from "../../hooks/useSignIn";

export const SignIn = () => {
  const { handleSubmit, register } = useForm();
  const { mutate, isLoading, isError } = useSignIn();

  return (
    <Stack width="full" height="full" justify="center" align="center">
      <VStack
        justify="start"
        align="center"
        gap="8"
        padding="1rem"
        background="white"
        borderRadius="8px"
        border="1px solid #e0e0e0"
      >
        <Image src={pp_logo} alt="PeçaAPeça" height="40%" width="auto" />
        <form onSubmit={handleSubmit(mutate)}>
          <VStack align="center">
            <VStack>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input
                type="text"
                id="email"
                name="email"
                {...register("email")}
                placeholder=""
              />
            </VStack>
            <VStack>
              <InputLabel htmlFor="pw">Password</InputLabel>
              <Input
                type="password"
                id="pw"
                name="pw"
                {...register("password")}
                placeholder=""
              />
            </VStack>
            <Button variant="solid" width="full" type="submit">
              Submit
            </Button>
          </VStack>
          {isLoading ? <div>Is Loading...</div> : null}
          {isError ? <div>Is Error...</div> : null}
        </form>
      </VStack>
    </Stack>
  );
};

// display: flex;
//   flex-direction: ${(props) => props.flexDirection || "row"};
//   align-items: ${(props) => props.alignItems || "start"};
//   justify-content: ${(props) => props.justifyContent || "start"};
//   width: 100%;
