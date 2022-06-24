// Componente "ficha da missao"

import { Grid, GridItem } from "@chakra-ui/react";

export function MissionCard() {
  return (
    <>
      <Grid
        templateAreas={`
                        "image      name        name"
                        "image      description description"
                        "difficulty description description"
                        "mod        description description"
                      `}
        gridTemplateRows={"repeat(4, 1fr)"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        // h={`${8 * 5}rem`}
        // w={`${8 * 7}rem`}
        h={"100%"}
        w={"100%"}
        gap="1"
        color="gray.100"
        fontWeight="bold"
        py={"1rem"}
      >
        {/*
        Dados mockados, ainda precisa implementar o consumo do backend
        */}
        <GridItem pl="2" bg="gray.700" area={"image"}>
          image
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"name"}>
          name
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"difficulty"}>
          difficulty
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"mod"}>
          mod
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"description"}>
          description
        </GridItem>
      </Grid>
    </>
  );
}
