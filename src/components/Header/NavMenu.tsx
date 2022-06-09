import { Button, HStack } from "@chakra-ui/react";

export function NavMenu() {
  return (
    <>
      <HStack p={2} spacing={"10"}>
        <Button variant={"unstyled"}>Personagens</Button>
        <Button variant={"unstyled"}>Missões</Button>
      </HStack>
    </>
  );
}
