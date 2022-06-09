import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
  WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiCloseLine, RiNotificationLine, RiXboxFill } from "react-icons/ri";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  const isWideView = useBreakpointValue({
    base: false,
    lg: true,
  });

  const [showLogout, setShowLogout] = useState(false);

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
