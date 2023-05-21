import React, { useEffect, useState } from "react";
import TokenService from "@/services/token/token.services";
import { Button } from "@chakra-ui/react";

export default function Profil() {
  const [token, setToken] = useState("");

  const handleGenerateToken = async () => {
    const getUserData = localStorage.getItem("user");
    const userData = JSON.parse(getUserData as string);

    await TokenService.createToken(userData.userId);
  };

  useEffect(() => {
    const getUserData = localStorage.getItem("user");
    const userData = JSON.parse(getUserData as string);

    TokenService.getToken(userData.userId).then((res) =>
      res.json().then((data) => setToken(data.token))
    );
  }, []);

  return (
    <div>
      <h1>Profil</h1>
      <Button onClick={() => handleGenerateToken()}>Generate token</Button>
      <p>{token}</p>
    </div>
  );
}
