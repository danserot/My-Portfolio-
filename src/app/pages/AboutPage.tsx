import { Box, Grid, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import PageShell from "../components/PageShell";
import { useLanguage } from "../i18n/context";
import type { AboutRowId } from "../i18n/types";

interface AboutMediaItem {
  id: AboutRowId;
  src: string;
  reverse?: boolean;
}

const ABOUT_MEDIA: readonly AboutMediaItem[] = [
  { id: "frontend", src: "/Images/developer.jpg" },
  { id: "volleyball", src: "/Images/volley.jpg", reverse: true },
  { id: "hackathons", src: "/Images/hacaton.jpg" },
  { id: "startup", src: "/Images/aword.jpg", reverse: true },
  { id: "university", src: "/Images/aitu.jpg" },
];

const glassPanelStyles = {
  bg: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderRadius: "18px",
  backdropFilter: "blur(10px)",
} as const;

export default function AboutPage() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <PageShell>
      <Box as="main" id="about" py={{ base: "64px", md: "90px" }} color="aliceblue">
        <Box w="min(1100px, 92%)" mx="auto">
          <Box as="header" mb="34px" textAlign="center">
            <Heading as="h1" mb="10px" fontSize="clamp(28px, 3.2vw, 40px)" fontWeight="800">
              {about.title}
            </Heading>
            <Text opacity="0.75" fontSize="16px">
              {about.subtitle}
            </Text>
          </Box>

          <Box my="60px" mb="70px" textAlign="center">
            <Heading as="h2" mb="32px" fontSize="32px" fontWeight="800">
              {about.techTitle}
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap="18px">
              {about.techCards.map((card) => (
                <Box
                  key={card.title}
                  {...glassPanelStyles}
                  p="26px"
                  transition="transform 0.25s ease, border-color 0.25s ease"
                  _hover={{ transform: "translateY(-4px)", borderColor: "rgba(161, 0, 255, 0.4)" }}>
                  <Heading as="h3" mb="12px" fontSize="18px" fontWeight="700">
                    {card.title}
                  </Heading>
                  <Text fontSize="15px" lineHeight="1.6" opacity="0.85">
                    {card.text}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box display="flex" flexDirection="column" gap="60px">
            {ABOUT_MEDIA.map((item) => {
              const row = about.rows[item.id];
              const mediaOrder = item.reverse ? { base: 0, md: 2 } : 0;
              const contentOrder = item.reverse ? { base: 1, md: 1 } : 1;

              return (
                <Grid key={item.id} templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={{ base: "22px", md: "40px" }} alignItems="center">
                  <Box order={mediaOrder}>
                    <Image
                      src={item.src}
                      alt={row.alt}
                      w="full"
                      h={{ base: "240px", md: "320px" }}
                      objectFit="cover"
                      borderRadius="18px"
                      transition="transform 0.3s ease"
                      _hover={{ transform: "scale(1.02)" }}
                    />
                  </Box>
                  <Box order={contentOrder} {...glassPanelStyles} p={{ base: "22px", md: "28px" }}>
                    <Heading as="h3" mb="12px" fontSize="22px" fontWeight="700">
                      {row.title}
                    </Heading>
                    <Text lineHeight="1.7" opacity="0.85">
                      {row.text}
                    </Text>
                  </Box>
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
    </PageShell>
  );
}
