import Head from "next/head";
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
      <main></main>
    </>
  );
}
