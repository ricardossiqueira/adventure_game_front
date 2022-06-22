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

export default function CharacterCard({
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
    </>
  );
}
