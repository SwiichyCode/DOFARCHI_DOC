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
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthService from "@/services/auth/auth.services";
import { useState } from "react";

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "login" | "register";
}

interface FormValues {
  email: string;
  password: string;
}

export default function AuthForm({
  isOpen,
  onClose,
  type,
}: RegisterModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      setIsLoading(true);

      if (type === "login") {
        await AuthService.login(data.email, data.password).then(() => {
          onClose();
          window.location.reload();
        });
      } else {
        await AuthService.register(data.email, data.password).then(() => {
          onClose();
        });
      }
    } catch (error: any) {
      if (error) {
        setError(true);
        setErrorMessage(error.response.data);
      }
      setIsLoading(false);
    }
  };

  console.log(error);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={2}>
        {type === "login" ? (
          <ModalHeader>Se connecter</ModalHeader>
        ) : (
          <ModalHeader>S'inscrire</ModalHeader>
        )}
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={error} className="flex flex-col gap-4">
              <InputGroup
                size="md"
                flex={"flex"}
                flexDirection={"column"}
                marginBottom={4}
              >
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
              {error && (
                <FormErrorMessage>{errorMessage.error}</FormErrorMessage>
              )}
              <Button
                colorScheme="teal"
                size="md"
                type="submit"
                marginTop={4}
                isLoading={isLoading}
              >
                {type === "login" ? "Se connecter" : "S'inscrire"}
              </Button>
            </FormControl>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
