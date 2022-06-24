import { Button, Flex, IconButton, Stack, Text, theme } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Head from "next/head";
import { Logo } from "../../components/Header/Logo";
import { Input } from "../../components/Form/Input";
import router, { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";

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
