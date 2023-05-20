import { useEffect, useState } from "react";

export default function useAuthValidation() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(true);
    }
  }, []);

  return { user, setUser };
}
