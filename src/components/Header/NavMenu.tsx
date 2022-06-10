import { HStack } from "@chakra-ui/react";
import { RiHome2Line, RiUser2Line, RiBook2Line } from "react-icons/ri";
import { NavLink } from "../Sidebar/NavLink";

export function NavMenu() {
  return (
    <>
      <HStack p={2} spacing={"10"}>
        <NavLink icon={RiHome2Line} href="/">
          Início
        </NavLink>
        <NavLink icon={RiUser2Line} href="/personagens">
          Personagens
        </NavLink>
        <NavLink icon={RiBook2Line} href="/missoes">
          Missões
        </NavLink>
      </HStack>
    </>
  );
}
