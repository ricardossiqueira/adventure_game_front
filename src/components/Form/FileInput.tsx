import {
  IconButtonProps as ChakraIconButtonProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton as ChakraIconButton,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  VisuallyHiddenInput,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction, useRef } from "react";
import { FieldError } from "react-hook-form";
import { RiUpload2Line } from "react-icons/ri";

interface ButtonProps extends ChakraIconButtonProps {
  name: string;
  accept: HTMLInputElement["accept"];
  label?: string;
  error?: FieldError;
}

const ButtonBase: ForwardRefRenderFunction<HTMLInputElement, ButtonProps> = (
  { name, label, error = null, accept, ...rest },
  ref
) => {
  const handleFileInputClick = () => fileInput.current.click();

  const fileInput = useRef(null);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <VisuallyHiddenInput accept={accept} type={"file"} ref={fileInput} />

      <ChakraIconButton
        onClick={handleFileInputClick}
        w={"fit-content"}
        bg={"yellow.400"}
        color={"gray.900"}
        _hover={{ opacity: 0.8 }}
        icon={<RiUpload2Line />}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const FileInput = forwardRef(ButtonBase);
