import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import CodeExample from "@/components/CodeExample";

export default function TokenAccess() {
  return (
    <>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          Token d'autorisation
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          L'API requiert une authentification basée sur un token d'autorisation
          pour garantir l'accès sécurisé aux ressources. Pour obtenir un token
          d'autorisation valide, vous devez vous inscrire et récupérer votre
          token depuis votre profil.
        </Text>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          Utilisation du Token d'autorisation
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Une fois que vous avez obtenu un token d'autorisation, vous devez
          l'inclure dans le header de vos requêtes ultérieures sous la clé
          Authorization. Voici un exemple de requête GET avec le token
          d'autorisation inclus :
        </Text>
        <CodeExample language="bash">
          <Text>GET /api/archimonstres </Text>
          <Text>Content-Type: application/json</Text>
          <Text>Authorization: Bearer votre_token_d'autorisation</Text>
        </CodeExample>
        <Text maxW="4xl" marginBottom={4} marginTop={4}>
          Assurez-vous de remplacer votre_token_d'autorisation par le token réel
          que vous avez obtenu lors de l'authentification.
        </Text>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          Validité du Token d'autorisation
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Le token d'autorisation est valide pendant 30 jours à partir du moment
          de sa création. Après cette période, vous devrez à nouveau générer un
          nouveau token d'autorisation.
        </Text>
      </Box>
    </>
  );
}
