import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthService from "@/services/auth/auth.services";

export default function useAuth() {
  const [user, setUser] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, []);

  const logout = () => {
    AuthService.logout();
    setUser(false);
    router.push("/presentation");
  };

  return { user, setUser, logout };
}
