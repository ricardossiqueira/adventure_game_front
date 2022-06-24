import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as ChakraTextarea,
  TextareaProps as ChakraTextareaProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface ChakraTextareaBaseProps extends ChakraTextareaProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const TextareaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  ChakraTextareaBaseProps
> = ({ name, label, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraTextarea
        name={name}
        id={name}
        focusBorderColor="yellow.400"
        bg="gray.800"
        variant="flushed"
        _hover={{ bg: "gray.900" }}
        size="lg"
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Textarea = forwardRef(TextareaBase);
