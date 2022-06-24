import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  theme,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

import { CharacterCard } from "../../components/Cards/Character";
import { Header } from "../../components/Header";
import { CreateCharacterModal } from "../../components/Modal/CreateCharacter";
import { Sidebar } from "../../components/Sidebar";

export default function Characters() {
  return (
    <>
      <Head>
        <title>Personagens | Adventure Game</title>
      </Head>
      <Header />
      <Sidebar />
      <main>
        <section>
          <Flex
            maxW={1220}
            my={"0"}
            mx={"auto"}
            py={"1rem"}
            px={"1rem"}
            h={"calc(100vh - 10rem)"}
            alignItems={"left"}
            justifyContent={"space-around"}
            flexDirection={"column"}
            background={"gray.800"}
            backdropFilter={"blur(10px)"}
            borderRadius={"1rem"}
          >
            <Flex w={"100%"} h={"100%"} pb={"2rem"}>
              <Tabs variant="soft-rounded" w={"100%"} h={"100%"}>
                <TabList>
                  <Tab
                    _hover={{ opacity: 0.8 }}
                    _selected={{
                      backgroundColor: theme.colors.yellow[400],
                      color: theme.colors.gray[900],
                    }}
                  >
                    Personagem 1
                  </Tab>
                </TabList>
                <TabPanels w={"100%"} h={"100%"}>
                  <TabPanel px={0} w={"100%"} h={"100%"}>
                    <CharacterCard />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
            <CreateCharacterModal />
          </Flex>
        </section>
      </main>
    </>
  );
}
