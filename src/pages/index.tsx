import {
  Container,
  Flex,
  Text,
  useBreakpointValue,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { TranslatedContainer } from "../components/TranslatedContainer";

export default function Home() {
  const isWideView = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Início | Adventure Game</title>
      </Head>
      <Header />
      <Sidebar />
      <main>
        <Flex
          maxW={1220}
          my={"0"}
          mx={"auto"}
          py={0}
          px={"2rem"}
          h={"calc(100vh - 10rem)"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <WrapItem as={"section"} maxW={680}>
            <Container>
              <Text as={"span"} fontSize={"1.5rem"} fontWeight={"bold"}>
                Olá, bem vindo 👋
              </Text>
              <Text
                as={"h1"}
                fontSize={"4.5rem"}
                lineHeight={"4.5rem"}
                fontWeight={900}
                mt={2.5}
              >
                Adventure Game
              </Text>
              <Text
                as={"p"}
                fontSize={"1.5rem"}
                lineHeight={"2.5rem"}
                mt={"1.5rem"}
              >
                Seu mini jogo de RPG online.
              </Text>
            </Container>
          </WrapItem>
          {!!isWideView && <TranslatedContainer />}
        </Flex>
      </main>
    </>
  );
}
