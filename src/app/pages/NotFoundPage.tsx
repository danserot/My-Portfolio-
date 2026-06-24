import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PageShell from "../components/PageShell";
import { useLanguage } from "../i18n/context";

export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <PageShell>
      <Flex as="main" minH="58vh" direction="column" align="center" justify="center" gap="16px" px="20px" textAlign="center">
        <Text color="#c463ff" fontSize="72px" fontWeight="900" lineHeight="1">404</Text>
        <Heading as="h1" fontSize="36px">{t.projects.detail.notFoundTitle}</Heading>
        <Text color="rgba(255, 255, 255, 0.65)">{t.projects.detail.notFoundText}</Text>
        <Button asChild mt="12px" bg="#a100ff" color="white" borderRadius="full" px="24px">
          <RouterLink to="/">{t.contact.backHome}</RouterLink>
        </Button>
      </Flex>
    </PageShell>
  );
}
