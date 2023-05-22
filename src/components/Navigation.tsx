import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import AuthForm from "../services/auth/AuthForm";
import useAuth from "@/hooks/useAuth";

export default function Navigation() {
  const { user, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
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

      {!user ? (
        <>
          <Button onClick={() => onOpenLoginModal()}>Connexion</Button>
          <Button onClick={() => onOpenRegisterModal()}>Inscription</Button>
        </>
      ) : (
        <>
          <Button>
            <Link href="/profil">Mon profil</Link>
          </Button>
          <Button onClick={() => handleLogout()}>Déconnexion</Button>
        </>
      )}

      <AuthForm
        isOpen={isOpenRegisterModal}
        onClose={onCloseRegisterModal}
        type={"register"}
      />
      <AuthForm
        isOpen={isOpenLoginModal}
        onClose={onCloseLoginModal}
        type={"login"}
      />
    </nav>
  );
}
