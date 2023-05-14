import { Heading, Text, Box, UnorderedList, ListItem } from "@chakra-ui/react";

export default function Avantages() {
  return (
    <>
      <Box>
        <Heading as="h2" marginBottom="4">
          Avantages de l'API
        </Heading>
        <Text maxW="4xl">
          En utilisant notre API Archimonstres, vous bénéficiez de plusieurs
          avantages importants :
        </Text>
        <UnorderedList
          maxW="4xl"
          marginTop="4"
          display="flex"
          flexDirection="column"
          gap="4"
        >
          <ListItem>
            <Text as="span">Facilité d'intégration </Text>: Notre API est simple
            à intégrer dans vos projets existants. Avec une documentation
            complète, des exemples de code et une structure cohérente, vous
            pouvez commencer à récupérer des données sur les archimonstres en un
            rien de temps.
          </ListItem>
          <ListItem>
            <Text as="span">Données à jour </Text>: Nous nous engageons à
            maintenir nos données sur les archimonstres régulièrement mises à
            jour. Vous pouvez donc être sûr d'avoir accès aux informations les
            plus récentes et précises.
          </ListItem>
          <ListItem>
            <Text as="span">Performance optimisée </Text>: Notre API est conçue
            pour offrir des performances élevées et une latence réduite. Grâce à
            notre infrastructure robuste et à notre optimisation des requêtes,
            vous pouvez récupérer rapidement les données dont vous avez besoin.
          </ListItem>
          <ListItem>
            <Text as="span">Flexibilité d'utilisation </Text>: Notre API est
            conçue pour offrir des performances élevées et une latence réduite.
            Grâce à notre infrastructure robuste et à notre optimisation des
            requêtes, vous pouvez récupérer rapidement les données dont vous
            avez besoin.
          </ListItem>
        </UnorderedList>
      </Box>
    </>
  );
}
