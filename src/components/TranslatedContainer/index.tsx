import { Box, theme, Flex, Center } from "@chakra-ui/react";
import { CharacterCard } from "../Cards/Character";

export function TranslatedContainer() {
  return (
    <Box
      h={"25rem"}
      w={"35rem"}
      backgroundColor={"transparent"}
      style={{ perspective: "1000px" }}
    >
      <Box
        h={"100%"}
        w={"100%"}
        backgroundColor={"gray.800"}
        borderRadius={"1rem"}
        borderColor={"yellow.400"}
        borderWidth={2}
        boxShadow={`0 0 .1rem ${theme.colors.gray[50]},
                    0 0 .1rem ${theme.colors.gray[50]},
                    0 0 .1rem ${theme.colors.yellow[400]},
                    0 0 0.4rem ${theme.colors.yellow[400]},
                    0 0 2rem ${theme.colors.yellow[400]},
                    inset 0 0 1rem ${theme.colors.yellow[400]};`}
        transform={"rotateY(-15deg) rotateX(15deg)"}
      >
        <Flex flex={0} w={"100%"} h={"100%"} justify={"center"} p={"1rem"}>
          <CharacterCard />
        </Flex>
      </Box>
    </Box>
  );
}
