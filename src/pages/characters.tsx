import {
  Avatar,
  Box,
  ColorModeScript,
  Flex,
  List,
  ListItem,
  Text,
  theme,
} from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import GridLayout from "react-grid-layout";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Characters() {
  const chartSeries = [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80],
    },
  ];
  const chartOptions: ApexOptions = {
    chart: {
      type: "radar",

      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: theme.colors.gray[50],
    },
    grid: { show: false },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    yaxis: {
      show: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Int", "Dex", "Str", "Spd", "Hp", "Mp"],
      axisBorder: {
        color: theme.colors.gray[50],
      },
      axisTicks: {
        color: theme.colors.gray[50],
      },
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const layout = [
    { i: "char_name", x: 0, y: 0, w: 4, h: 1 },
    { i: "char_lvl", x: 4, y: 0, w: 1, h: 1 },
    { i: "char_lifes", x: 5, y: 0, w: 1, h: 1 },
    { i: "char_img", x: 0, y: 1, w: 2, h: 5 },
    { i: "char_desc", x: 2, y: 1, w: 4, h: 5 },
    { i: "char_attrs", x: 0, y: 2, w: 3, h: 5, minW: 3, minH: 2 },
    { i: "char_attrs_chart", x: 3, y: 2, w: 3, h: 5, minW: 3, minH: 3 },
  ];

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
          <GridLayout
            className="layout"
            layout={layout}
            cols={10}
            rowHeight={30}
            width={1200}
          >
            <Text key={"char_name"}>Nome do personagem</Text>
            <Text key={"char_lvl"}>Nível: 0</Text>
            <Text key={"char_lifes"}>Vida: 100%</Text>
            <Avatar key={"char_img"} background={"Transparent"} />
            <Box key={"char_attrs"} background={"Transparent"}>
              <Text as="h3">Atributos</Text>
              <List>
                <ListItem>
                  <strong>Int</strong> 10
                </ListItem>
                <ListItem>
                  <strong>Dex</strong> 10
                </ListItem>
                <ListItem>
                  <strong>Str</strong> 10
                </ListItem>
                <ListItem>
                  <strong>Spd</strong> 10
                </ListItem>
                <ListItem>
                  <strong>Hp</strong> 10
                </ListItem>
                <ListItem>
                  <strong>Mp</strong> 10
                </ListItem>
              </List>
            </Box>
            <Box key={"char_attrs_chart"}>
              <Text as="h3">Gráfico de atributos</Text>
              <Chart
                options={chartOptions}
                series={chartSeries}
                type={chartOptions.chart.type}
              />
            </Box>
            <Box key={"char_desc"}>
              <Text as="h3">Descrição</Text>
              <Text as="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </Box>
          </GridLayout>
        </Flex>
      </main>
    </>
  );
}
