// Pagina de login da aplicacao

import { Button, Flex, IconButton, Stack, Text, theme } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";

// Componentes custmizados
import { Input } from "../../components/Form/Input";

// Schema para validacao dos inseridos pelo usuario
type SignInFormData = {
  username: string;
  password: string;
};

const yupSignInFormSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username obrigatório")
    .min(5, "Mínimo de 5 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(yupSignInFormSchema) });

  {
    /*
    Dados mockados, ainda precisa implementar o consumo do backend
    */
  }

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Login | Adventure Game</title>
      </Head>
      <main id="main">
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
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <IconButton
                  variant={"unstyled"}
                  w={"fit-content"}
                  icon={<RiArrowLeftLine size={theme.sizes["6"]} />}
                  aria-label={"Voltar"}
                  onClick={router.back}
                  _hover={{ opacity: 0.8 }}
                />
                <Text as="h3" fontSize="2xl" fontWeight={"bold"}>
                  Entrar
                </Text>
              </Flex>
              <Input
                name="username"
                label="Nome de usuário"
                error={errors.username}
                {...register("username")}
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
