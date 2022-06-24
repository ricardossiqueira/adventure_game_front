// Componente "ficha do personagem"

import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CharacterCardProps {
  image?: ReactNode;
  name?: string;
  level?: number;
  lifes?: number;
  attributes?: [any];
  description?: string;
}

export function CharacterCard({
  image,
  name,
  level,
  lifes,
  attributes,
  description,
}: CharacterCardProps) {
  return (
    <>
      <Grid
        templateAreas={`"image      name        name"
                        "image      level       lifes"
                        "image      description description"
                        "attributes description description"
                        "attributes description description"`}
        gridTemplateRows={"repeat(5, 1fr)"}
        gridTemplateColumns={"repeat(3, 1fr)"}
        // h={`${8 * 5}rem`}
        // w={`${8 * 7}rem`}
        h={"100%"}
        w={"100%"}
        // py={"1rem"}
        gap="1"
        color="gray.100"
        fontWeight="bold"
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
        <GridItem pl="2" bg="gray.700" area={"level"}>
          level
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"lifes"}>
          lifes
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"attributes"}>
          attributes
        </GridItem>
        <GridItem pl="2" bg="gray.700" area={"description"}>
          description
        </GridItem>
      </Grid>
    </>
  );
}
