import Head from "next/head";
import { AnimatedCanvas } from "../components/Background/AnimatedCanvas";
import { Header } from "../components/Header";

export default function Missions() {
  return (
    <>
      <Head>
        <title>Personagens | Adventure Game</title>
      </Head>
      <Header />
      <AnimatedCanvas />
      <main></main>
    </>
  );
}
