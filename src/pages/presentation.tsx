import { Heading, Text, Box } from "@chakra-ui/react";

export default function Presentation() {
  return (
    <>
      <Box marginBottom={8}>
        <Heading as="h2" marginBottom="4">
          Objectif de l'API
        </Heading>
        <Text maxW="4xl">
          Bienvenue dans l'API Archimonstres ! Notre API a été spécialement
          conçue pour fournir aux développeurs un accès facile et efficace aux
          données sur les archimonstres du jeu Dofus. Que vous soyez en train de
          développer une application, un site web ou tout autre projet
          nécessitant des informations sur les archimonstres, notre API est là
          pour vous faciliter la tâche.
        </Text>
      </Box>
    </>
  );
}
