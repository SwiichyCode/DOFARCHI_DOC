import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  InputGroup,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import { useForm, Resolver } from "react-hook-form";
import AuthService from "@/services/auth.services";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    AuthService.register(data.email, data.password);

    onClose();
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={2}>
        <ModalHeader>S'inscrire</ModalHeader>
        {/* <ModalCloseButton /> */}
        <ModalBody>
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <InputGroup size="md" flex={"flex"} flexDirection={"column"}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input placeholder="Email" size="md" {...register("email")} />
            </InputGroup>
            <InputGroup size="md" flex={"flex"} flexDirection={"column"}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                pr="4.5rem"
                type="password"
                placeholder="Enter password"
                {...register("password")}
              />
            </InputGroup>

            <Button
              colorScheme="teal"
              size="md"
              type="submit"
              marginTop={"2.5"}
            >
              Submit
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
