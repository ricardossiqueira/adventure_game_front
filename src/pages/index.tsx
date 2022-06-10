import {
  Box,
  Center,
  Container,
  Flex,
  Text,
  theme,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import { AnimatedCanvas } from "../components/Background/AnimatedCanvas";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Adventure Game</title>
      </Head>
      <Header />
      <AnimatedCanvas />
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
          {/* <Sidebar /> */}
          <WrapItem as={"section"} maxW={680}>
            <Container>
              <Text as={"span"} fontSize={"1.5rem"} fontWeight={"bold"}>
                Alguma mensagem
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
                Alguma descrição
              </Text>
            </Container>
          </WrapItem>
          <Box
            h={720}
            w={540}
            backgroundColor={"transparent"}
            style={{ perspective: "1000px" }}
          >
            <Box
              h={720}
              w={540}
              backgroundColor={"gray.800"}
              borderRadius={"1rem"}
              borderColor={"yellow.400"}
              borderWidth={2}
              boxShadow={`0 0 .1rem #fff, 0 0 .1rem #fff, 0 0 .1rem ${theme.colors.yellow[400]}, 0 0 0.4rem ${theme.colors.yellow[400]}, 0 0 2rem ${theme.colors.yellow[400]}, inset 0 0 1rem ${theme.colors.yellow[400]};`}
              transform={"rotateY(-15deg) rotateX(15deg)"}
            >
              <Flex
                flex={0}
                w={"100%"}
                h={"100%"}
                justify={"center"}
                p={"2rem"}
              >
                <Center>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  aliquam commodo eros, nec suscipit purus. Integer sollicitudin
                  sapien nec felis tincidunt, sollicitudin semper magna posuere.
                  Integer interdum et turpis sed tristique. Nam eget ultricies
                  justo. Quisque lobortis nulla ut orci finibus, sed lacinia
                  odio ultricies. Nulla leo arcu, sagittis eu magna nec,
                  elementum condimentum dui. Mauris ac scelerisque lectus, sed
                  sollicitudin urna.
                </Center>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </main>
    </>
  );
}
