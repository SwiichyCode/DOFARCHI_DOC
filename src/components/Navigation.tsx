import { FiGithub } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-3 pt-3">
      <a href="https://github.com/SwiichyCode/DOFARCHI">
        <FiGithub size={"24"} />
      </a>
      <FaMoon size={"24"} />
      <Button>
        <a href="https://www.buymeacoffee.com/">Donation</a>
      </Button>
    </nav>
  );
}
