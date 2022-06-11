import { Box, theme, Flex, Center } from "@chakra-ui/react";

export function TranslatedContainer() {
  return (
    <Box
      h={"70vh"}
      w={"30vw"}
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
        boxShadow={`0 0 .1rem ${theme.colors.gray[50]}, 0 0 .1rem ${theme.colors.gray[50]}, 0 0 .1rem ${theme.colors.yellow[400]}, 0 0 0.4rem ${theme.colors.yellow[400]}, 0 0 2rem ${theme.colors.yellow[400]}, inset 0 0 1rem ${theme.colors.yellow[400]};`}
        transform={"rotateY(-15deg) rotateX(15deg)"}
      >
        <Flex flex={0} w={"100%"} h={"100%"} justify={"center"} p={"2rem"}>
          <Center>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            aliquam commodo eros, nec suscipit purus. Integer sollicitudin
            sapien nec felis tincidunt, sollicitudin semper magna posuere.
            Integer interdum et turpis sed tristique. Nam eget ultricies justo.
            Quisque lobortis nulla ut orci finibus, sed lacinia odio ultricies.
            Nulla leo arcu, sagittis eu magna nec, elementum condimentum dui.
            Mauris ac scelerisque lectus, sed sollicitudin urna.
          </Center>
        </Flex>
      </Box>
    </Box>
  );
}
