import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { useLanguage } from "../i18n/context";

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
  50% { transform: translate3d(0, -14px, 0) rotate(4deg); }
`;

export default function NotFoundPage() {
  const { t } = useLanguage();
  const location = useLocation();
  const notFound = t.notFound;

  return (
    <PageShell>
      <Seo title={`404 — ${notFound.title}`} description={notFound.text} path={location.pathname} noIndex />
      <Flex
        as="main"
        position="relative"
        minH={{ base: "68vh", md: "74vh" }}
        overflow="hidden"
        direction="column"
        align="center"
        justify="center"
        px="20px"
        py={{ base: "72px", md: "90px" }}
        textAlign="center">
        <Box
          position="absolute"
          top="15%"
          left={{ base: "-80px", md: "10%" }}
          w={{ base: "180px", md: "260px" }}
          h={{ base: "180px", md: "260px" }}
          border="1px solid rgba(161, 0, 255, 0.28)"
          borderRadius="50%"
          animation={`${float} 7s ease-in-out infinite`}
          _after={{
            content: '"</>"',
            position: "absolute",
            top: "12%",
            right: "3%",
            display: "grid",
            placeItems: "center",
            w: "54px",
            h: "54px",
            bg: "#221d25",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            color: "#cf7cff",
            fontWeight: "800",
          }}
        />
        <Box
          position="absolute"
          right={{ base: "-70px", md: "8%" }}
          bottom="8%"
          w={{ base: "150px", md: "220px" }}
          h={{ base: "150px", md: "220px" }}
          bg="radial-gradient(circle, rgba(161, 0, 255, 0.2), transparent 68%)"
          animation={`${float} 8s 1s ease-in-out infinite`}
        />

        <Box position="relative" zIndex="1" maxW="760px">
          <Text color="#c463ff" fontSize="13px" fontWeight="800" letterSpacing="0.16em" textTransform="uppercase">
            {notFound.eyebrow}
          </Text>
          <Text
            mt="4px"
            bg="linear-gradient(135deg, #ffffff 10%, #ca71ff 55%, #7a00c2 100%)"
            bgClip="text"
            color="transparent"
            fontSize={{ base: "112px", md: "190px" }}
            fontWeight="900"
            letterSpacing="-0.08em"
            lineHeight="0.95"
            aria-label="404">
            404
          </Text>
          <Heading as="h1" mt="18px" fontSize={{ base: "30px", md: "46px" }} fontWeight="800">
            {notFound.title}
          </Heading>
          <Text mx="auto" mt="16px" maxW="620px" color="rgba(255, 255, 255, 0.65)" fontSize={{ base: "15px", md: "17px" }} lineHeight="1.75">
            {notFound.text}
          </Text>

          <Flex mt="32px" justify="center" gap="12px" wrap="wrap">
            <Button asChild h="48px" px="24px" bg="#a100ff" color="white" borderRadius="full" fontWeight="800" _hover={{ bg: "#b52bff", transform: "translateY(-2px)" }}>
              <RouterLink to="/">{notFound.homeAction}</RouterLink>
            </Button>
            <Button asChild h="48px" px="24px" bg="rgba(255, 255, 255, 0.06)" color="white" border="1px solid rgba(255, 255, 255, 0.12)" borderRadius="full" _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}>
              <RouterLink to="/projects">{notFound.projectsAction}</RouterLink>
            </Button>
            <Button asChild h="48px" px="24px" variant="ghost" color="rgba(255, 255, 255, 0.72)" borderRadius="full" _hover={{ color: "white", bg: "rgba(255, 255, 255, 0.06)" }}>
              <RouterLink to="/contact">{notFound.contactAction}</RouterLink>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </PageShell>
  );
}
