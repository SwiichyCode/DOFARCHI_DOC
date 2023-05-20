import { FiGithub } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { RegisterModal } from "./RegisterModal";
import { useDisclosure } from "@chakra-ui/react";
import { LoginModal } from "./LoginModal";
import { useEffect, useState } from "react";
import AuthService from "@/services/auth.services";
import useAuthValidation from "@/hooks/useAuthValidation";

export default function Navigation() {
  const {
    isOpen: isOpenRegisterModal,
    onOpen: onOpenRegisterModal,
    onClose: onCloseRegisterModal,
  } = useDisclosure();
  const {
    isOpen: isOpenLoginModal,
    onOpen: onOpenLoginModal,
    onClose: onCloseLoginModal,
  } = useDisclosure();
  const { user, setUser } = useAuthValidation();

  const handleLogout = () => {
    AuthService.logout();
    setUser(false);
  };

  return (
    <nav className="flex items-center gap-3 pt-3">
      <a href="https://github.com/SwiichyCode/DOFARCHI">
        <FiGithub size={"24"} />
      </a>
      <FaMoon size={"24"} />
      <Button>
        <a href="https://www.buymeacoffee.com/">Donation</a>
      </Button>

      {!user && (
        <>
          <Button onClick={() => onOpenLoginModal()}>Connexion</Button>
          <Button onClick={() => onOpenRegisterModal()}>Inscription</Button>
        </>
      )}

      {user && (
        <>
          <Button>Mon profil</Button>
          <Button onClick={() => handleLogout()}>Déconnexion</Button>
        </>
      )}

      <RegisterModal
        isOpen={isOpenRegisterModal}
        onClose={onCloseRegisterModal}
      />
      <LoginModal isOpen={isOpenLoginModal} onClose={onCloseLoginModal} />
    </nav>
  );
}
