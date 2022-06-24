// Componente para indicar visualmente quando o item do nav menu esta ativo - no caso mobile

import {
  Icon,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  Text,
} from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../ActiveLink";

interface NavLinkProps {
  icon?: ElementType;
  children: string;
  rest?: ChakraLinkProps;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <>
      <ActiveLink href={href} passHref>
        <ChakraLink display={"flex"} alignContent="center" {...rest}>
          {!!icon && <Icon as={icon} fontSize="xl" />}
          <Text ml={4} fontWeight="md">
            {children}
          </Text>
        </ChakraLink>
      </ActiveLink>
    </>
  );
}
