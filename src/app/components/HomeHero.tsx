import { Box, Button, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import FlipPhoto from "./FlipPhoto";

const TECHNOLOGY_ICONS = [
  { src: "/Images/javascript.png", alt: "JavaScript" },
  { src: "/Images/html.png", alt: "HTML" },
  { src: "/Images/css.png", alt: "CSS" },
  { src: "/Images/reactjs.png", alt: "React" },
] as const;

const actionButtonStyles = {
  minW: "9em",
  h: "48px",
  borderRadius: "full",
  fontSize: "1.05rem",
  fontWeight: "700",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  _hover: { transform: "translateY(-2px)", boxShadow: "0 10px 26px rgba(161, 0, 255, 0.24)" },
} as const;

export default function HomeHero() {
  const { t } = useLanguage();
  const home = t.home;

  return (
    <Flex as="main" w="min(92%, 680px)" mx="auto" my={{ base: "56px", md: "80px" }} direction="column" align="center">
      <FlipPhoto frontSrc="/Images/Main.jpg" backSrc="/Images/im.jpg" alt={home.heroAlt} size={320} />

      <Box textAlign="center">
        <Heading as="h1" my={{ base: "32px", md: "48px" }} color="aliceblue" fontSize={{ base: "2.35rem", md: "3rem" }} fontWeight="800" lineHeight="1.12">
          {home.titleLine}
          <br />
          <Text as="span" color="#c463ff">
            {home.titleAccent}
          </Text>
        </Heading>
        <Text color="#969391" fontSize="md" lineHeight="1.75" textAlign="center">
          {home.subtitle}
        </Text>
      </Box>

      <Flex mt="32px" justify="center" gap="14px" wrap="wrap">
        <Link href="https://t.me/@Artem_Khloptsev" target="_blank" rel="noreferrer" textDecoration="none">
          <Button {...actionButtonStyles} bg="white" color="#181818" border="1px solid white">
            {home.primaryAction}
          </Button>
        </Link>
        <Button asChild {...actionButtonStyles} bg="transparent" color="aliceblue" border="2px solid aliceblue">
          <RouterLink to="/resume">{home.secondaryAction}</RouterLink>
        </Button>
      </Flex>

      <Text mt={{ base: "72px", md: "112px" }} color="#7b7777" fontSize="1.35rem" fontWeight="600" letterSpacing="0.06em">
        {home.experienceTitle}
      </Text>
      <Flex mt="28px" w={{ base: "100%", sm: "75%" }} justify="space-around" align="center" gap="6">
        {TECHNOLOGY_ICONS.map((icon) => (
          <Image key={icon.alt} src={icon.src} alt={icon.alt} h="40px" objectFit="contain" />
        ))}
      </Flex>
    </Flex>
  );
}
