import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  WrapItem,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { RiCloseLine } from "react-icons/ri";
import { DefaultYellowButton } from "../Buttons/DefaultYellow";
import { OutlinedGrayButton } from "../Buttons/OutlinedGray";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const isWideView = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [showLogout, setShowLogout] = useState(false);
  const isAuthenticated = false;

  const router = useRouter();

  if (isAuthenticated) {
    return (
      <>
        <Flex align="center">
          {showProfileData && (
            <Box mr="4" textAlign="right">
              <Text>User name</Text>
              <Text color="gray.300" fontSize="sm">
                User level
              </Text>
            </Box>
          )}
          <WrapItem
            onMouseOver={() => setShowLogout(true)}
            onMouseLeave={() => setShowLogout(false)}
          >
            {!showLogout ? (
              <Avatar size={isWideView ? "md" : "sm"} name="User" />
            ) : (
              <Avatar
                size={isWideView ? "md" : "sm"}
                backgroundColor={"red.500"}
                icon={<Icon as={RiCloseLine} fontSize="xl" />}
              />
            )}
          </WrapItem>
        </Flex>
      </>
    );
  }

  return (
    <>
      <HStack spacing={"2rem"}>
        <DefaultYellowButton
          aria-label="Criar conta"
          onClick={() => {
            router.push("/auth/create ");
          }}
        >
          Criar conta
        </DefaultYellowButton>
        <OutlinedGrayButton
          aria-label="Entrar"
          onClick={() => {
            router.push("/auth/login");
          }}
        >
          Entrar
        </OutlinedGrayButton>
      </HStack>
    </>
  );
}
