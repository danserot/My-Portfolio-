import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { useLanguage } from "../i18n/context";

export default function ThanksPage() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <Seo title={t.contact.successTitle} description={t.contact.successText} path="/thanks" />
      <Flex as="main" minH="58vh" direction="column" align="center" justify="center" gap="18px" px="20px" textAlign="center">
        <Text fontSize="54px" aria-hidden="true">✓</Text>
        <Heading as="h1" fontSize={{ base: "36px", md: "48px" }}>{t.contact.successTitle}</Heading>
        <Text maxW="580px" color="rgba(255, 255, 255, 0.68)" fontSize="17px" lineHeight="1.7">{t.contact.successText}</Text>
        <Button asChild mt="12px" bg="#a100ff" color="white" borderRadius="full" px="24px">
          <RouterLink to="/">{t.contact.backHome}</RouterLink>
        </Button>
      </Flex>
    </PageShell>
  );
}
