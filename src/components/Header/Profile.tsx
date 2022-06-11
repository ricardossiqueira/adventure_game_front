import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  WrapItem,
  Button,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  RiCloseLine,
  RiLoginBoxLine,
  RiNotificationLine,
  RiXboxFill,
} from "react-icons/ri";

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
        <Button
          aria-label="Criar conta"
          colorScheme={"yellow"}
          _hover={{ bg: "yellow.400", opacity: 0.9 }}
          onClick={() => {}}
        >
          Criar conta
        </Button>
        <Button
          variant={"outline"}
          aria-label="Entrar"
          colorScheme={"gray"}
          _hover={{ bg: "gray.700", opacity: 0.9 }}
          onClick={() => {
            router.push("/login");
          }}
        >
          Entrar
        </Button>
      </HStack>
    </>
  );
}
