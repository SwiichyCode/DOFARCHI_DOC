import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Aside() {
  return (
    <aside className="w-1/4 mr-20">
      <Accordion defaultIndex={[0, 1]} allowMultiple>
        <AccordionItem>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <AccordionButton>Introduction</AccordionButton>
            <AccordionIcon />
          </Box>
          <AccordionPanel pb={2}>
            <Link href="/presentation">- Objectif de l'API</Link>
          </AccordionPanel>
          <AccordionPanel pb={2}>
            <Link href="/fonctionnalites">- Fonctionnalités</Link>
          </AccordionPanel>
          <AccordionPanel pb={4}>
            <Link href="/avantages">- Avantages de l'API</Link>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <AccordionButton>Fonctionnalités</AccordionButton>
            <AccordionIcon />
          </Box>
          <AccordionPanel pb={2}>
            <Link href="/endpoints">- Endpoints</Link>
          </AccordionPanel>
          <AccordionPanel pb={2}>
            <Link href="/introduction">- Codes d'erreur</Link>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}
