import CodeExample from "@/components/CodeExample";
import { Heading, Text, Box } from "@chakra-ui/react";

export default function Endpoints() {
  return (
    <>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          Endpoints
        </Heading>
        <Text maxW="4xl">
          L'API Archimonstres offre les endpoints suivants pour récupérer les
          informations sur les archimonstres :
        </Text>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          GET /api/archimonstres
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Cet endpoint permet de récupérer la liste complète des archimonstres
          disponibles dans le jeu Dofus. Il renvoie un tableau contenant les
          détails de chaque archimonstre, tels que leur nom, leur niveau, leurs
          statistiques, etc.
        </Text>
        <Box marginBottom={8}>
          <Text marginBottom={4}>Exemple de requête :</Text>
          <CodeExample language="bash" code="GET /api/archimonstres" />
        </Box>
        <Box marginBottom={8}>
          <Text marginBottom={4}>Exemple de réponse :</Text>
          <CodeExample
            language="json"
            code={`{"nom": "Arachitik la Souffreteuse","etape": 20,"zone": "Astrub","sousZone": "Souterrains d'Astrub","imgURL": "https://res.cloudinary.com/dinaj1mwf/image/upload/v1683914543/arakne_malade_pdnype.jpg"}`}
          />
        </Box>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          GET /api/archimonstres/etape/:step
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Cet endpoint permet de récupérer les archimonstres correspondant à une
          étape spécifique du jeu. L'utilisateur doit fournir le numéro de
          l'étape dans l'URL de la requête. L'API renverra les archimonstres
          associés à cette étape.
        </Text>
        <Box marginBottom={8}>
          <Text marginBottom={4}>Exemple de requête :</Text>
          <CodeExample language="bash" code="GET /api/archimonstres/etape/20" />
        </Box>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          GET /api/archimonstres/nom/:name
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Cet endpoint permet de rechercher des archimonstres par leur nom.
          L'utilisateur doit fournir le nom de l'archimonstre dans l'URL de la
          requête. L'API renverra les archimonstres correspondants, même si le
          nom fourni est partiel.
        </Text>
        <Box marginBottom={8}>
          <Text marginBottom={4}>Exemple de requête :</Text>
          <CodeExample
            language="bash"
            code="GET /api/archimonstres/nom/Arachi"
          />
        </Box>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          GET /api/archimonstres/zone/:zone
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Cet endpoint permet de rechercher des archimonstres par leur zone.
          L'utilisateur doit fournir le nom de la zone dans l'URL de la requête.
          L'API renverra les archimonstres correspondants, même si le nom fourni
          est partiel.
        </Text>
        <Box marginBottom={8}>
          <Text marginBottom={4}>Exemple de requête :</Text>
          <CodeExample
            language="bash"
            code="GET /api/archimonstres/zone/Amakna"
          />
        </Box>
      </Box>
      <Box marginBottom={16}>
        <Heading as="h2" marginBottom="4">
          GET /api/archimonstres/sous-zone/:sousZone
        </Heading>
        <Text maxW="4xl" marginBottom={4}>
          Cet endpoint permet de rechercher des archimonstres par leur
          sous-zone. L'utilisateur doit fournir le nom de la sous-zone dans
          l'URL de la requête. L'API renverra les archimonstres correspondants,
          même si le nom fourni est partiel.
        </Text>
        <Box marginBottom={8}>
          <Text marginBottom={4}>Exemple de requête :</Text>
          <CodeExample
            language="bash"
            code="GET /api/archimonstres/sous-zone/Feudala"
          />
        </Box>
      </Box>
    </>
  );
}
