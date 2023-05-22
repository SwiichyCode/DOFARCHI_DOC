import React, { useEffect, useState } from "react";
import TokenService from "@/services/token/token.services";
import { Button, Heading } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

export default function Profil() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState({} as any);

  const handleGenerateToken = async () => {
    const getUserData = localStorage.getItem("user");
    const userData = JSON.parse(getUserData as string);

    await TokenService.createToken(userData.userId);
    window.location.reload();
  };

  useEffect(() => {
    const getUserData = localStorage.getItem("user");
    const userData = JSON.parse(getUserData as string);

    TokenService.getToken(userData.userId).then((res) =>
      res.json().then((data) => setToken(data.token))
    );

    setUserData(userData);
  }, []);

  return (
    <Box>
      <Heading as="h1" marginBottom="4">
        Profil
      </Heading>
      <Text maxW={"4xl"} marginBottom={4}>
        Email: {userData.userEmail}
      </Text>
      <Text maxW={"4xl"} marginBottom={4}>
        Token: {token}
      </Text>
      <Button onClick={() => handleGenerateToken()}>
        {token ? "Update Token" : "Generate token"}
      </Button>
      {/* <p>{token}</p> */}
    </Box>
  );
}
