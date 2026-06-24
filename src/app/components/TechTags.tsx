import { Box, Flex, Text } from "@chakra-ui/react";

const TECH_GLYPHS: Record<string, string> = {
  HTML5: "5",
  CSS3: "#",
  "JavaScript (ES6+)": "JS",
  JavaScript: "JS",
  TypeScript: "TS",
  React: "⚛",
  "React Native": "RN",
  "Expo Router": "E",
  "Chakra UI": "C",
  "Tailwind CSS": "TW",
  "CSS Grid": "▦",
  Flexbox: "↔",
  Git: "G",
  GitHub: "GH",
  Figma: "F",
  "VS Code": "⌘",
  npm: "N",
  "Expo Go": "E",
  "REST API": "API",
  "TanStack Query": "TQ",
  Zustand: "Z",
};

function getGlyph(technology: string) {
  return TECH_GLYPHS[technology] ?? "◆";
}

export default function TechTags({ technologies }: { technologies: readonly string[] }) {
  return (
    <Flex justify="center" gap="8px" wrap="wrap">
      {technologies.map((technology) => (
        <Flex
          key={technology}
          align="center"
          gap="7px"
          px="10px"
          py="7px"
          bg="rgba(255, 255, 255, 0.055)"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius="full">
          <Box
            display="grid"
            placeItems="center"
            minW="24px"
            h="24px"
            px="4px"
            borderRadius="7px"
            bg="rgba(161, 0, 255, 0.22)"
            color="#d79aff"
            fontSize="10px"
            fontWeight="800">
            {getGlyph(technology)}
          </Box>
          <Text fontSize="13px" fontWeight="650" color="rgba(255, 255, 255, 0.86)">
            {technology}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
