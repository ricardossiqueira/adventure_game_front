import { Flex, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Characters() {
  return (
    <>
      <Head>
        <title>Personagens | Adventure Game</title>
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
          background={"gray.800"}
          backdropFilter={"blur(10px)"}
          borderRadius={"1rem"}
        >
          <Grid
            templateAreas={`"image image name name"
                            "image image level lifes"
                            "attributes description description description"`}
            gridTemplateRows={"1fr 1fr 1fr 1fr"}
            gridTemplateColumns={"1fr 1fr 1fr 1fr"}
            h="100%"
            w="100%"
            maxW="40rem"
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
          >
            <GridItem pl="2" bg="orange.300" area={"image"}>
              image
            </GridItem>
            <GridItem pl="2" bg="pink.300" area={"name"}>
              name
            </GridItem>
            <GridItem pl="2" bg="red.300" area={"level"}>
              level
            </GridItem>
            <GridItem pl="2" bg="green.300" area={"lifes"}>
              lifes
            </GridItem>
            <GridItem pl="2" bg="purple.300" area={"attributes"}>
              attributes
            </GridItem>
            <GridItem pl="2" bg="blue.300" area={"description"}>
              description
            </GridItem>
          </Grid>
        </Flex>
      </main>
    </>
  );
}
