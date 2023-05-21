import { FiGithub } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import AuthService from "@/services/auth/auth.services";
import AuthForm from "../services/auth/AuthForm";
import useAuthValidation from "@/hooks/useAuthValidation";
import Link from "next/link";

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
