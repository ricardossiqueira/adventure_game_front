import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";

import { Input } from "../components/Form/Input";
import { Logo } from "../components/Header/Logo";
import { AnimatedCanvas } from "../components/Background/AnimatedCanvas";

type SignInFormData = {
  email: string;
  password: string;
};

const yupSignInFormSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(yupSignInFormSchema) });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <>
      <Head>
        <title>Login | Adventure Game</title>
      </Head>
      <main id="main">
        <AnimatedCanvas />
        <Flex w="100vw" h="100vh" align="center" justify="center">
          <Flex
            as="form"
            w="100%"
            maxW={360}
            bg="gray.800"
            padding={8}
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Stack spacing={4}>
              <Logo />
              <Input
                name="email"
                label="Email"
                type="email"
                error={errors.email}
                {...register("email")}
              />
              <Input
                name="password"
                label="Senha"
                type="password"
                error={errors.password}
                {...register("password")}
              />
            </Stack>
            <Button
              type="submit"
              mt="6"
              colorScheme="yellow"
              isLoading={isSubmitting}
            >
              Entrar
            </Button>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
