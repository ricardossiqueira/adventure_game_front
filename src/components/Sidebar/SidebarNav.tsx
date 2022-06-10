import { Stack } from "@chakra-ui/react";
import {
  RiBook2Line,
  RiHome2Line,
  RiInputMethodLine,
  RiUser2Line,
} from "react-icons/ri";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <>
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiHome2Line} href="/">
            Início
          </NavLink>
          <NavLink icon={RiUser2Line} href="/characters">
            Personagens
          </NavLink>
          <NavLink icon={RiBook2Line} href="/missions">
            Missões
          </NavLink>
        </NavSection>
        <NavSection title="USUÁRIO">
          <NavLink icon={RiInputMethodLine} href="/sair">
            Sair
          </NavLink>
        </NavSection>
      </Stack>
    </>
  );
}
