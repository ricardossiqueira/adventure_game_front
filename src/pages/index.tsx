import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Adventure Game</title>
      </Head>
      <Header />
      <Sidebar />
      <main>
        <Image
          src={"/images/background.svg"}
          alt="Imagem de fundo"
          layout="responsive"
          width={1440}
          height={1080}
        />
      </main>
    </>
  );
}
