import { Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import { useLanguage } from "../i18n/context";

const SOCIAL_LINKS = [
  { href: "https://github.com/danserot", src: "/icons/github.svg", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/artem-khloptsev-a37533384/",
    src: "/icons/linkedin.svg",
    label: "LinkedIn",
  },
  { href: "https://t.me/@ArtemKhloptsev", src: "/icons/telegram.svg", label: "Telegram" },
] as const;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <Box
      as="footer"
      mt={{ base: "80px", md: "110px" }}
      px={{ base: "14px", md: 0 }}
      pb="100px">
      <Flex
        position="relative"
        zIndex="1"
        w="min(1094px, 100%)"
        minH={{ base: "auto", md: "162px" }}
        mx="auto"
        align="center"
        px={{ base: "22px", md: "40px" }}
        py={{ base: "28px", md: "30px" }}
        bg="#20201f"
        border="1px solid rgba(255, 255, 255, 0.08)"
        borderRadius={{ base: "18px", md: "0 0 24px 24px" }}
        boxShadow="inset 0 -1px 0 rgba(255, 255, 255, 0.04)">
        <Flex w="full" align="center" justify="space-between" gap="40px" wrap="wrap" direction={{ base: "column", md: "row" }} textAlign={{ base: "center", md: "left" }}>
          <Box>
            <Heading as="h2" mb="9px" color="white" fontSize="clamp(24px, 2.4vw, 28px)" fontWeight="800" lineHeight="1.1">
              Artem Khloptsev
            </Heading>
            <Text mb="7px" color="rgba(255, 255, 255, 0.66)" fontSize="15px" fontWeight="500" lineHeight="1.45">
              {t.footer.role}
            </Text>
            <Text color="rgba(255, 255, 255, 0.92)" fontSize="14px" fontWeight="600">
              tema324756@gmail.com
            </Text>
          </Box>

          <Flex align="center" justify="center" gap={{ base: "16px", md: "22px" }}>
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                display="grid"
                placeItems="center"
                w={{ base: "46px", md: "50px" }}
                h={{ base: "46px", md: "50px" }}
                borderRadius="full"
                bg="#f7f7f7"
                border="1px solid rgba(255, 255, 255, 0.2)"
                transition="transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease"
                _hover={{ bg: "white", transform: "translateY(-3px)", boxShadow: "0 0 24px rgba(161, 0, 255, 0.42)" }}>
                <Image src={social.src} alt={social.label} w={{ base: "21px", md: "23px" }} h={{ base: "21px", md: "23px" }} objectFit="contain" />
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
