import { Heading, Text, Box } from "@chakra-ui/react";

export default function Presentation() {
  return (
    <>
      <Box marginBottom={8}>
        <Heading as="h2" marginBottom="4">
          Objectif de l'API
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Bienvenue dans l'API Archimonstres ! Notre API a été spécialement
          conçue pour fournir aux développeurs un accès facile et efficace aux
          données sur les archimonstres du jeu Dofus. Que vous soyez en train de
          développer une application, un site web ou tout autre projet
          nécessitant des informations sur les archimonstres, notre API est là
          pour vous faciliter la tâche.
        </Text>
        <Text maxW="4xl" marginTop="4">
          Veuillez noter que notre API est actuellement en version bêta et nous
          travaillons constamment à son amélioration. Pour le moment, l'accès à
          l'API ne nécessite pas de token d'authentification, mais veuillez
          noter que l'utilisation de tokens pourrait être mise en place
          prochainement pour renforcer la sécurité et offrir une meilleure
          expérience utilisateur.
        </Text>
        <Text maxW="4xl" marginTop="4">
          Nous vous encourageons à explorer nos différentes fonctionnalités,
          notamment la récupération de la liste complète des archimonstres, la
          recherche par étape ou par nom, et bien plus encore. N'hésitez pas à
          nous faire part de vos commentaires et suggestions afin que nous
          puissions continuer à améliorer notre API pour répondre à vos besoins.
        </Text>
        <Text maxW="4xl" marginTop="4">
          Nous sommes ravis de vous accueillir dans la communauté de l'API
          Archimonstres et nous espérons que vous trouverez notre API utile et
          intuitive dans vos projets.
        </Text>
      </Box>
    </>
  );
}
