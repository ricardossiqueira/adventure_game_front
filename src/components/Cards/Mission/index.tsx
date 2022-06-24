import { AspectRatio, Grid, GridItem } from "@chakra-ui/react";

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
        h={`${8 * 5}rem`}
        w={`${8 * 7}rem`}
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
        <GridItem pl="2" bg="red.300" area={"difficulty"}>
          difficulty
        </GridItem>
        <GridItem pl="2" bg="green.300" area={"mod"}>
          mod
        </GridItem>
        <GridItem pl="2" bg="blue.300" area={"description"}>
          description
        </GridItem>
      </Grid>
    </>
  );
}
