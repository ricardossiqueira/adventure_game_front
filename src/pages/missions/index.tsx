import { Button, Flex, Select, Stack, theme } from "@chakra-ui/react";
import Head from "next/head";
import { MissionCard } from "../../components/Cards/Mission";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function Missions() {
  return (
    <>
      <Head>
        <title>Missões | Adventure Game</title>
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
            <Stack spacing={3}>
              <Select
                placeholder="Selecione uma missão"
                size="md"
                variant="filled"
                bg="gray.700"
                _hover={{ opacity: 0.8 }}
              >
                <option
                  style={{
                    background: theme.colors.gray[600],
                    color: theme.colors.gray[50],
                  }}
                  value="option1"
                >
                  Option 1
                </option>
                <option
                  style={{
                    background: theme.colors.gray[600],
                    color: theme.colors.gray[50],
                  }}
                  value="option2"
                >
                  Option 2
                </option>
                <option
                  style={{
                    background: theme.colors.gray[600],
                    color: theme.colors.gray[50],
                  }}
                  value="option3"
                >
                  Option 3
                </option>
              </Select>
            </Stack>
            <MissionCard />
            <Button alignSelf={"flex-start"} colorScheme={"yellow"}>
              Fazer Missão
            </Button>
          </Flex>
        </section>
      </main>
    </>
  );
}
