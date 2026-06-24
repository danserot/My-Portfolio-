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
import { useMemo, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { PROJECT_FILTERS, PROJECTS } from "../data/projects";
import { useLanguage } from "../i18n/context";
import type {
  ProjectFilter,
} from "../i18n/types";

function ProjectDescription({ paragraphs }: { paragraphs: readonly string[] }) {
  return (
    <Box mb="28px">
      {paragraphs.map((paragraph) => (
        <Text key={paragraph} mb="16px" whiteSpace="pre-line">
          {paragraph}
        </Text>
      ))}
    </Box>
  );
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const { t } = useLanguage();

  const projects = useMemo(
    () =>
      PROJECTS.map((project) => ({
        ...project,
        ...t.projects.items[project.id],
      })),
    [t.projects.items],
  );

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects],
  );

  const counts = useMemo<Record<ProjectFilter, number>>(() => {
    const result: Record<ProjectFilter, number> = {
      all: projects.length,
      real: 0,
      fun: 0,
      games: 0,
    };

    projects.forEach((project) => {
      result[project.category] += 1;
    });

    return result;
  }, [projects]);

  return (
    <PageShell>
      <Seo title={t.seo.projects.title} description={t.seo.projects.description} path="/projects" />
      <Box as="main" w="min(1100px, 92%)" mx="auto" my={{ base: "56px", md: "80px" }}>
        <Heading as="h1" mb="18px" color="white" fontSize={{ base: "28px", md: "36px" }} fontWeight="800" textAlign={{ base: "center", md: "left" }}>
          {t.projects.title}
        </Heading>

        <Flex mb="30px" justify="center" align="center" gap="14px" wrap="wrap">
          {PROJECT_FILTERS.map((name) => {
            const isActive = filter === name;

            return (
              <Button
                key={name}
                type="button"
                flex="0 0 auto"
                gap="10px"
                px={{ base: "12px", md: "14px" }}
                py="10px"
                h="auto"
                borderRadius="full"
                color="rgba(255, 255, 255, 0.9)"
                bg={isActive ? "rgba(161, 0, 255, 0.18)" : "rgba(255, 255, 255, 0.05)"}
                border={isActive ? "1px solid rgba(161, 0, 255, 0.45)" : "1px solid rgba(255, 255, 255, 0.1)"}
                boxShadow={isActive ? "0 0 24px rgba(161, 0, 255, 0.25)" : "none"}
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="700"
                whiteSpace="nowrap"
                transition="transform 0.2s ease, border-color 0.2s ease"
                _hover={{ transform: "translateY(-1px)", borderColor: "rgba(255, 255, 255, 0.22)" }}
                aria-pressed={isActive}
                onClick={() => setFilter(name)}>
                {t.projects.filters[name]}
                <Flex
                  as="span"
                  minW="26px"
                  h="22px"
                  align="center"
                  justify="center"
                  px="8px"
                  borderRadius="full"
                  bg="rgba(0, 0, 0, 0.35)"
                  border="1px solid rgba(255, 255, 255, 0.1)"
                  fontSize="12px"
                  fontWeight="800">
                  {counts[name]}
                </Flex>
              </Button>
            );
          })}
        </Flex>

        {filteredProjects.map((project, projectIndex) => (
          <Reveal
            key={project.id}
            delay={(projectIndex % 3) * 70}
            maxW="1100px"
            mx="auto"
            my="36px"
            overflow="hidden"
            bg="rgb(61, 60, 60)"
            border="1px solid rgba(255, 255, 255, 0.08)"
            borderRadius="16px"
            boxShadow="0 8px 16px rgba(0, 0, 0, 0.1)">
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="10px" p={{ base: "16px", md: "20px" }}>
              {project.images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${project.title} — ${t.projects.imageAlt} ${index + 1}`}
                  w="full"
                  h={{ base: "190px", md: "250px" }}
                  borderRadius="12px"
                  objectFit="cover"
                />
              ))}
            </SimpleGrid>

            <Box px={{ base: "18px", md: "30px" }} pt={{ base: "18px", md: "20px" }} pb={{ base: "22px", md: "28px" }} color="white" fontSize={{ base: "16px", md: "18px" }} lineHeight="1.65">
              <Heading as="h2" mb="12px" fontSize={{ base: "22px", md: "28px" }} fontWeight="700">
                {project.title}
              </Heading>
              <ProjectDescription paragraphs={project.description} />
              <Flex gap="12px" wrap="wrap">
                <Button
                  asChild
                  h="48px"
                  px="22px"
                  borderRadius="full"
                  bg="#a100ff"
                  color="white"
                  fontWeight="700"
                  _hover={{ bg: "#b52bff", transform: "translateY(-2px)" }}>
                  <RouterLink to={`/projects/${project.id}`}>
                    {t.projects.viewDetails}
                  </RouterLink>
                </Button>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={{ base: "full", sm: "9em" }}
                maxW="320px"
                h="48px"
                color="aliceblue"
                bg="#161513"
                border="2px solid aliceblue"
                borderRadius="full"
                fontSize="1rem"
                fontWeight="600"
                textDecoration="none"
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{ transform: "translateY(-2px)", boxShadow: "0 10px 24px rgba(0, 0, 0, 0.25)" }}>
                {t.projects.goToPage}
              </Link>
              </Flex>
            </Box>
          </Reveal>
        ))}
      </Box>
    </PageShell>
  );
}
