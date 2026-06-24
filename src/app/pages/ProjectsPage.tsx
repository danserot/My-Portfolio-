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
import PageShell from "../components/PageShell";
import { useLanguage } from "../i18n/context";
import type {
  ProjectCategory,
  ProjectFilter,
  ProjectId,
} from "../i18n/types";

interface ProjectDefinition {
  id: ProjectId;
  category: ProjectCategory;
  imgs: readonly string[];
  link: string;
}

const PROJECTS: readonly ProjectDefinition[] = [
  {
    id: "goleador",
    category: "real",
    imgs: ["/Images/kelme1.png", "/Images/kelme2.png", "/Images/kelme3.png", "/Images/kelme4.png"],
    link: "https://goleador.kz/",
  },
  {
    id: "autoscout",
    category: "real",
    imgs: [
      "/Images/AutoScout(1).png",
      "/Images/AutoScout(2).png",
      "/Images/AutoScout(3).png",
      "/Images/AutoScout(4).png",
    ],
    link: "https://autoscout-kz.netlify.app/",
  },
  {
    id: "gsc",
    category: "real",
    imgs: ["/Images/gsc1.png", "/Images/gsc2.png", "/Images/gsc3.png", "/Images/gsc4.png"],
    link: "https://golden-students-club.netlify.app/",
  },
  {
    id: "landing",
    category: "fun",
    imgs: [
      "/Images/Снимок экрана 2025-06-20 084501.png",
      "/Images/Снимок экрана 2025-06-20 084543.png",
      "/Images/Снимок экрана 2025-06-20 084625.png",
      "/Images/Снимок экрана 2025-06-20 084655.png",
    ],
    link: "https://frolicking-semolina-de0ae3.netlify.app/",
  },
  {
    id: "hangman",
    category: "games",
    imgs: ["/Images/game1.png", "/Images/game2.png", "/Images/game3.png", "/Images/game4.png"],
    link: "https://timely-fox-75efdb.netlify.app/",
  },
  {
    id: "tictactoe",
    category: "games",
    imgs: [
      "/Images/image.png",
      "/Images/image copy 2.png",
      "/Images/image copy 3.png",
      "/Images/image copy.png",
    ],
    link: "https://polite-mermaid-22cba4.netlify.app/",
  },
  {
    id: "birthday",
    category: "fun",
    imgs: [
      "/Images/image copy 4.png",
      "/Images/image copy 5.png",
      "/Images/image copy 6.png",
      "/Images/image copy 7.png",
    ],
    link: "https://stalwart-kataifi-9dc8fb.netlify.app/",
  },
  {
    id: "todo",
    category: "fun",
    imgs: [
      "/Images/image copy 8.png",
      "/Images/image copy 11.png",
      "/Images/image copy 10.png",
      "/Images/image copy 9.png",
    ],
    link: "https://incandescent-starburst-447285.netlify.app/",
  },
  {
    id: "pomodoro",
    category: "fun",
    imgs: [
      "/Images/image copy 12.png",
      "/Images/image copy 15.png",
      "/Images/image copy 14.png",
      "/Images/image copy 13.png",
    ],
    link: "https://majestic-frangollo-c8fcb8.netlify.app/",
  },
  {
    id: "monkey",
    category: "fun",
    imgs: [
      "/Images/image copy 12.png",
      "/Images/image copy 15.png",
      "/Images/image copy 14.png",
      "/Images/image copy 13.png",
    ],
    link: "https://majestic-frangollo-c8fcb8.netlify.app/",
  },
];

const FILTERS: readonly ProjectFilter[] = ["all", "real", "fun", "games"];

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
      <Box as="main" w="min(1100px, 92%)" mx="auto" my={{ base: "56px", md: "80px" }}>
        <Heading as="h1" mb="18px" color="white" fontSize={{ base: "28px", md: "36px" }} fontWeight="800" textAlign={{ base: "center", md: "left" }}>
          {t.projects.title}
        </Heading>

        <Flex mb="30px" justify="center" align="center" gap="14px" wrap="wrap">
          {FILTERS.map((name) => {
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

        {filteredProjects.map((project) => (
          <Box
            key={project.id}
            maxW="1100px"
            mx="auto"
            my="36px"
            overflow="hidden"
            bg="rgb(61, 60, 60)"
            border="1px solid rgba(255, 255, 255, 0.08)"
            borderRadius="16px"
            boxShadow="0 8px 16px rgba(0, 0, 0, 0.1)">
            <SimpleGrid columns={{ base: 1, sm: 2 }} gap="10px" p={{ base: "16px", md: "20px" }}>
              {project.imgs.map((src, index) => (
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
              <Link
                href={project.link}
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
            </Box>
          </Box>
        ))}
      </Box>
    </PageShell>
  );
}
