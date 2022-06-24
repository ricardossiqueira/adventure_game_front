import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { DefaultYellowButton } from "../Buttons/DefaultYellow";
import { OutlinedGrayButton } from "../Buttons/OutlinedGray";
import { Input } from "../Form/Input";
import { Textarea } from "../Form/TextArea";
import { FileInput } from "../Form/FileInput";

type CreateCharacterFormData = {
  name: string;
  description: string;
  image: File;
};

const yupCreateCharacterFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  description: yup
    .string()
    .required("Descrição obrigatória")
    .max(150, "Descrição muito longa"),
  image: yup.mixed().required("Imagem obrigatória"),
});

export function CreateCharacterModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({ resolver: yupResolver(yupCreateCharacterFormSchema) });

  const handleCreateCharacter: SubmitHandler<CreateCharacterFormData> = async (
    data
  ) => {
    const image = data.image[0];
    console.log(image);
    new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const initialRef = useRef(null);
  return (
    <>
      <DefaultYellowButton
        aria-label={"Novo personagem"}
        alignSelf={"flex-start"}
        onClick={onOpen}
      >
        Novo Personagem
      </DefaultYellowButton>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          as="form"
          onSubmit={handleSubmit(handleCreateCharacter)}
          bg={"gray.800"}
        >
          <ModalHeader>Novo Personagem</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={4}>
              <Input
                name="name"
                label="Nome"
                ref={initialRef}
                placeholder="Nome"
                error={errors.name}
                {...register("name")}
              />

              <Textarea
                label="Descrição"
                name="description"
                placeholder="Descrição"
                error={errors.description}
                {...register("description")}
              />

              <FileInput
                accept="image/png, image/jpeg, image/gif"
                aria-label="Anexar imagem do personagem"
                name={"image"}
                error={errors.image}
                label={"Imagem"}
                {...register("image")}
              />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <DefaultYellowButton mr={3} type="submit" isLoading={isSubmitting}>
              Salvar
            </DefaultYellowButton>
            <OutlinedGrayButton onClick={onClose}>Cancelar</OutlinedGrayButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
