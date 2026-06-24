import { Box, Flex, Heading, List, Text } from "@chakra-ui/react";
import type { Translation } from "../i18n/types";
import Reveal from "./Reveal";

type Experience = Translation["about"]["experience"];

export default function ExperienceSection({ experience }: { experience: Experience }) {
  return (
    <Reveal my={{ base: "56px", md: "76px" }}>
      <Box
        position="relative"
        overflow="hidden"
        p={{ base: "24px", md: "38px" }}
        bg="rgba(255, 255, 255, 0.045)"
        border="1px solid rgba(255, 255, 255, 0.09)"
        borderRadius="24px"
        boxShadow="0 18px 60px rgba(0, 0, 0, 0.22)"
        _before={{
          content: '""',
          position: "absolute",
          top: "-120px",
          right: "-80px",
          w: "300px",
          h: "300px",
          bg: "radial-gradient(circle, rgba(161, 0, 255, 0.2), transparent 68%)",
          pointerEvents: "none",
        }}>
        <Flex position="relative" direction={{ base: "column", md: "row" }} justify="space-between" gap="32px">
          <Box maxW="360px">
            <Text mb="10px" color="#c463ff" fontSize="13px" fontWeight="800" letterSpacing="0.12em" textTransform="uppercase">
              {experience.subtitle}
            </Text>
            <Heading as="h2" mb="14px" fontSize={{ base: "30px", md: "40px" }} fontWeight="800">
              {experience.title}
            </Heading>
            <Heading as="h3" fontSize="22px" fontWeight="700">
              {experience.role}
            </Heading>
            <Text mt="6px" color="rgba(255, 255, 255, 0.68)">
              {experience.company} · {experience.location}
            </Text>
            <Text mt="4px" color="rgba(255, 255, 255, 0.68)">
              {experience.period}
            </Text>
          </Box>

          <List.Root maxW="620px" gap="14px" listStyle="none">
            {experience.achievements.map((achievement) => (
              <List.Item key={achievement} display="flex" gap="12px" lineHeight="1.65" color="rgba(255, 255, 255, 0.84)">
                <Text as="span" color="#c463ff" fontWeight="900">→</Text>
                {achievement}
              </List.Item>
            ))}
          </List.Root>
        </Flex>
      </Box>
    </Reveal>
  );
}
