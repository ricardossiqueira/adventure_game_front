import { Button, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface OutlinedGrayButtonProps extends ChakraButtonProps {
  children: string;
}

export const OutlinedGrayButton = ({
  children,
  ...rest
}: OutlinedGrayButtonProps) => {
  return (
    <>
      <Button
        variant={"outline"}
        colorScheme={"gray"}
        _hover={{ bg: "gray.700", opacity: 0.9 }}
        {...rest}
      >
        {children}
      </Button>
    </>
  );
};
