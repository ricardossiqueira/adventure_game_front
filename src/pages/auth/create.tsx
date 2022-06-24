// Pagina de criar conta

import { Button, Flex, IconButton, Stack, Text, theme } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { RiArrowLeftLine } from "react-icons/ri";
import { useRouter } from "next/router";

// Componentes customizados
import { Input } from "../../components/Form/Input";

// Schemas para validacao dos dados inseridos pelo usuario
type SignInFormData = {
  username: string;
  password: string;
};

const yupSignInFormSchema = yup.object().shape({
  username: yup
    .string()
    .required("Nome de usuário obrigatório")
    .min(5, "Mínimo de 5 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Mínimo de 6 caracteres"),
  password_confirmation: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .min(6, "Mínimo de 6 caracteres")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
});

{
  /*
  Dados mockados, ainda precisa implementar o consumo do backend
  */
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(yupSignInFormSchema) });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Criar conta | Adventure Game</title>
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
                  Criar conta
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
              <Input
                name="password_confirmation"
                label="Confirmar Senha"
                type="password"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </Stack>
            <Button
              type="submit"
              mt="6"
              colorScheme="yellow"
              isLoading={isSubmitting}
            >
              Criar conta
            </Button>
          </Flex>
        </Flex>
      </main>
    </>
  );
}
