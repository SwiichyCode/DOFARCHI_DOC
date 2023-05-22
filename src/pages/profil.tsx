import React, { useEffect, useState } from "react";
import TokenService from "@/services/token/token.services";
import tokenRemainingTime from "@/utils/tokenRemainingTime";
import { Button, Heading } from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";

interface TokenProps {
  token: string;
  tokenExpirationDate: string;
}

export default function Profil() {
  const [tokenData, setTokenData] = useState<TokenProps>({
    token: "",
    tokenExpirationDate: "",
  });
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
      res.json().then((data) => setTokenData(data))
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
        Token: {tokenData.token}
        Token expiration date: {tokenData.tokenExpirationDate}
        Temps restant: {tokenRemainingTime(tokenData.tokenExpirationDate)} days
      </Text>
      <Button onClick={() => handleGenerateToken()}>
        {tokenData.token ? "Update Token" : "Generate token"}
      </Button>
    </Box>
  );
}
