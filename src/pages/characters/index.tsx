import {
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
            <Tabs variant="soft-rounded">
              <TabList>
                <Tab
                  _hover={{ opacity: 0.8 }}
                  _selected={{
                    backgroundColor: theme.colors.yellow[400],
                    color: theme.colors.gray[900],
                  }}
                >
                  Char 1 Name
                </Tab>
                <Tab
                  _hover={{ opacity: 0.8 }}
                  _selected={{
                    backgroundColor: theme.colors.yellow[400],
                    color: theme.colors.gray[900],
                  }}
                >
                  Char 2 Name
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <CharacterCard />
                </TabPanel>
                <TabPanel>
                  <CharacterCard />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <CreateCharacterModal />
          </Flex>
        </section>
      </main>
    </>
  );
}
