import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink, useParams } from "react-router-dom";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Seo, { SITE_URL } from "../components/Seo";
import TechTags from "../components/TechTags";
import { getProjectById, isProjectId } from "../data/projects";
import { useLanguage } from "../i18n/context";

const detailPanelStyles = {
  p: { base: "22px", md: "28px" },
  bg: "rgba(255, 255, 255, 0.045)",
  border: "1px solid rgba(255, 255, 255, 0.09)",
  borderRadius: "20px",
} as const;

export default function ProjectDetailsPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { t } = useLanguage();

  if (!isProjectId(projectId)) {
    return (
      <PageShell>
        <Flex as="main" minH="60vh" direction="column" align="center" justify="center" gap="18px" px="20px" textAlign="center">
          <Heading as="h1" fontSize="40px">{t.projects.detail.notFoundTitle}</Heading>
          <Text color="rgba(255, 255, 255, 0.68)">{t.projects.detail.notFoundText}</Text>
          <Button asChild bg="#a100ff" color="white" borderRadius="full" px="22px">
            <RouterLink to="/projects">{t.projects.detail.backToProjects}</RouterLink>
          </Button>
        </Flex>
      </PageShell>
    );
  }

  const project = getProjectById(projectId);
  const projectText = t.projects.items[project.id];
  const categoryDetail = t.projects.detail.byCategory[project.category];
  const seoDescription = projectText.description[0];

  return (
    <PageShell>
      <Seo
        title={`${projectText.title} — Artem Khloptsev`}
        description={seoDescription}
        path={`/projects/${project.id}`}
        image={`${SITE_URL}${project.images[0]}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: projectText.title,
          description: seoDescription,
          url: `${SITE_URL}/projects/${project.id}`,
          image: `${SITE_URL}${project.images[0]}`,
          author: { "@type": "Person", name: "Artem Khloptsev" },
        }}
      />

      <Box as="main" w="min(1120px, 92%)" mx="auto" py={{ base: "48px", md: "72px" }}>
        <Button asChild mb="28px" variant="ghost" color="#d69bff" px="0" _hover={{ bg: "transparent", color: "white" }}>
          <RouterLink to="/projects">← {t.projects.detail.backToProjects}</RouterLink>
        </Button>

        <Reveal>
          <Heading as="h1" maxW="900px" fontSize={{ base: "36px", md: "58px" }} lineHeight="1.08" fontWeight="800">
            {projectText.title}
          </Heading>
          <Text maxW="820px" mt="22px" color="rgba(255, 255, 255, 0.7)" fontSize={{ base: "17px", md: "19px" }} lineHeight="1.75">
            {seoDescription}
          </Text>
          <Flex mt="28px" gap="12px" wrap="wrap">
            <Link href={project.liveUrl} target="_blank" rel="noreferrer" px="22px" py="12px" bg="#a100ff" color="white" borderRadius="full" fontWeight="700" textDecoration="none" _hover={{ bg: "#b52bff" }}>
              {t.projects.detail.liveDemo}
            </Link>
            <Link href={project.sourceUrl} target="_blank" rel="noreferrer" px="22px" py="12px" border="1px solid rgba(255, 255, 255, 0.2)" color="white" borderRadius="full" fontWeight="700" textDecoration="none" _hover={{ borderColor: "#a100ff" }}>
              {t.projects.detail.sourceCode}
            </Link>
          </Flex>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="20px" my={{ base: "42px", md: "58px" }}>
          <Reveal {...detailPanelStyles}>
            <Heading as="h2" mb="16px" fontSize="20px">{t.projects.detail.roleTitle}</Heading>
            <Text color="rgba(255, 255, 255, 0.75)" lineHeight="1.7">{categoryDetail.role}</Text>
          </Reveal>
          <Reveal {...detailPanelStyles} delay={80}>
            <Heading as="h2" mb="18px" fontSize="20px">{t.projects.detail.stackTitle}</Heading>
            <TechTags technologies={project.stack} />
          </Reveal>
        </SimpleGrid>

        <SimpleGrid columns={{ base: 1, lg: 3 }} gap="18px" mb={{ base: "52px", md: "72px" }}>
          {[
            [t.projects.detail.challengeTitle, categoryDetail.challenge],
            [t.projects.detail.approachTitle, categoryDetail.approach],
            [t.projects.detail.resultTitle, categoryDetail.result],
          ].map(([title, content], index) => (
            <Reveal key={title} {...detailPanelStyles} delay={index * 70}>
              <Heading as="h2" mb="14px" color={index === 2 ? "#cf82ff" : "white"} fontSize="20px">{title}</Heading>
              <Text color="rgba(255, 255, 255, 0.72)" lineHeight="1.72">{content}</Text>
            </Reveal>
          ))}
        </SimpleGrid>

        <Reveal>
          <Heading as="h2" mb="24px" fontSize={{ base: "28px", md: "34px" }}>{t.projects.detail.galleryTitle}</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap="16px">
            {project.images.map((image, index) => (
              <Image key={image} src={image} alt={`${projectText.title} — ${t.projects.imageAlt} ${index + 1}`} w="full" h={{ base: "220px", md: "320px" }} objectFit="cover" borderRadius="18px" border="1px solid rgba(255, 255, 255, 0.08)" />
            ))}
          </SimpleGrid>
        </Reveal>
      </Box>
    </PageShell>
  );
}
