import { Heading, Text, Box, ListItem, OrderedList } from "@chakra-ui/react";

export default function Fonctionnalites() {
  return (
    <>
      <Box marginBottom={8}>
        <Heading as="h2" marginBottom="4">
          Fonctionnalités clés
        </Heading>
        <Text maxW="4xl">
          Notre API offre plusieurs fonctionnalités clés qui vous permettent de
          tirer pleinement parti des données sur les archimonstres :
        </Text>
        <OrderedList
          maxW="4xl"
          marginTop="4"
          display="flex"
          flexDirection="column"
          marginInlineStart="1.8rem"
          gap="4"
        >
          <ListItem>
            <Text as="span" fontWeight="bold">
              Récupération complète des archimonstres
            </Text>
            : Vous pouvez obtenir la liste complète des archimonstres du jeu
            Dofus à partir de notre API. Cela inclut des détails tels que les
            caractéristiques, les capacités spéciales, les niveaux, et bien plus
            encore.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Recherche par étape
            </Text>
            : Vous avez la possibilité de filtrer les archimonstres en fonction
            de l'étape à laquelle ils apparaissent dans le jeu. Cela vous permet
            de cibler spécifiquement les archimonstres correspondant à une étape
            donnée de votre choix.
          </ListItem>
          <ListItem>
            <Text as="span" fontWeight="bold">
              Recherche par nom
            </Text>
            : Si vous connaissez le nom partiel d'un archimonstre, notre API
            vous permet de rechercher les archimonstres correspondants. Vous
            pouvez utiliser cette fonctionnalité pour trouver rapidement les
            archimonstres dont vous avez besoin.
          </ListItem>
        </OrderedList>
      </Box>
    </>
  );
}
