import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Head from "next/head";

import { particles } from "../config/particles";
import { Input } from "../components/Form/Input";

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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particles.options}
      />
      <Head>
        <title>Login | Adventure Game</title>
      </Head>
      <main id="main">
        <Flex w="100vw" h="100vh" align="center" justify="center" zIndex={1}>
          <Flex
            as="form"
            w="100%"
            maxW={360}
            bg="blue.900"
            padding={8}
            borderRadius={8}
            flexDir="column"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <Stack spacing={4}>
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
