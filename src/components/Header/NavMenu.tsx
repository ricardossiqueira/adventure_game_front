import { HStack } from "@chakra-ui/react";
import { RiHome2Line, RiUser2Line, RiBook2Line } from "react-icons/ri";
import { NavLink } from "../Sidebar/NavLink";

export function NavMenu() {
  return (
    <>
      <HStack p={2} spacing={"10"}>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/characters">Personagens</NavLink>
        <NavLink href="/missions">Missões</NavLink>
      </HStack>
    </>
  );
}
