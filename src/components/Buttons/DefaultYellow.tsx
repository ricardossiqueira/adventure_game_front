import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface DefaultYellowButtonProps extends ChakraButtonProps {
  children: string;
}

export const DefaultYellowButton = ({
  children,
  ...rest
}: DefaultYellowButtonProps) => {
  return (
    <>
      <Button
        colorScheme={"yellow"}
        _hover={{ bg: "yellow.400", opacity: 0.9 }}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};
