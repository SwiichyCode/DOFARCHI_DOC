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
import { useForm } from "react-hook-form";
import AuthService from "@/services/auth/auth.services";

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

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (type === "login") {
        await AuthService.login(data.email, data.password);
        onClose();
        window.location.reload();
      } else {
        await AuthService.register(data.email, data.password);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding={2}>
        {/* <ModalHeader>Se connecter</ModalHeader> */}
        {type === "login" ? (
          <ModalHeader>Se connecter</ModalHeader>
        ) : (
          <ModalHeader>S'inscrire</ModalHeader>
        )}
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
              {type === "login" ? "Se connecter" : "S'inscrire"}
            </Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
