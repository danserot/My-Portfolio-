import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { CERTIFICATES } from "../data/certificates";
import { useLanguage } from "../i18n/context";

function SearchIcon() {
  return (
    <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </Icon>
  );
}

function CloseIcon() {
  return (
    <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m6 6 12 12M18 6 6 18" />
    </Icon>
  );
}

function DownloadIcon() {
  return (
    <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </Icon>
  );
}

function ExternalLinkIcon() {
  return (
    <Icon viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 5h5v5m0-5-9 9M19 13v6H5V5h6" />
    </Icon>
  );
}

const fieldStyles = {
  h: "52px",
  border: "1px solid rgba(255, 255, 255, 0.14)",
  borderRadius: "14px",
  bg: "#20201f",
  color: "white",
  _placeholder: { color: "#77736f" },
  _focusVisible: {
    borderColor: "#c463ff",
    boxShadow: "0 0 0 3px rgba(196, 99, 255, 0.16)",
  },
} as const;

const actionStyles = {
  minH: "44px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  px: "14px",
  borderRadius: "full",
  fontSize: "0.86rem",
  fontWeight: "700",
  textDecoration: "none",
  transition: "transform 0.2s ease, border-color 0.2s ease, background 0.2s ease",
  _hover: { transform: "translateY(-1px)", borderColor: "#c463ff" },
  _focusVisible: {
    outline: "3px solid rgba(196, 99, 255, 0.55)",
    outlineOffset: "3px",
  },
} as const;

export default function CertificatesPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedCertificate = CERTIFICATES.find((certificate) => certificate.id === selectedId);
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(CERTIFICATES.map((certificate) => certificate.category)))],
    [],
  );
  const filteredCertificates = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return CERTIFICATES.filter((certificate) => {
      const matchesCategory = category === "all" || certificate.category === category;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        certificate.title.toLocaleLowerCase().includes(normalizedQuery) ||
        certificate.category.toLocaleLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  useEffect(() => {
    if (!selectedCertificate) {
      document.body.style.overflow = "auto";
      return undefined;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCertificate]);

  return (
    <PageShell>
      <Seo title={t.seo.certificates.title} description={t.seo.certificates.description} path="/certificates" />
      <Box as="main" w="min(1180px, calc(100% - 24px))" mx="auto" pt={{ base: "34px", md: "52px", lg: "72px" }} pb={{ base: "56px", md: "88px" }}>
        <Flex direction={{ base: "column", lg: "row" }} align={{ base: "flex-start", lg: "flex-end" }} justify="space-between" gap="28px" mb={{ base: "28px", md: "42px" }}>
          <Box>
            <Text mb="12px" color="#c463ff" fontSize="0.78rem" fontWeight="800" letterSpacing="0.12em">
              {CERTIFICATES.length} {t.certificates.countLabel}
            </Text>
            <Heading as="h1" fontSize="clamp(2.4rem, 6vw, 4.5rem)" fontWeight="800" lineHeight="1" letterSpacing="-0.04em">
              {t.certificates.title}
            </Heading>
            <Text maxW="650px" mt="18px" color="#969391" fontSize="clamp(1rem, 1.8vw, 1.15rem)" lineHeight="1.65">
              {t.certificates.subtitle}
            </Text>
          </Box>

          <Box position="relative" w={{ base: "full", lg: "360px" }}>
            <Box position="absolute" top="14px" left="16px" zIndex="1" w="20px" h="20px" color="#969391" pointerEvents="none">
              <SearchIcon />
            </Box>
            <Input
              aria-label={t.certificates.searchPlaceholder}
              placeholder={t.certificates.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              pl="48px"
              {...fieldStyles}
            />
          </Box>
        </Flex>

        <Flex gap="10px" mb="28px" wrap="wrap" role="group" aria-label={t.certificates.allCategories}>
          {categories.map((item) => {
            const isActive = category === item;
            const label = item === "all" ? t.certificates.allCategories : t.certificates.categories[item] ?? item;

            return (
              <Button
                key={item}
                type="button"
                minH="42px"
                px="16px"
                border="1px solid"
                borderColor={isActive ? "#a100ff" : "rgba(255, 255, 255, 0.14)"}
                borderRadius="full"
                bg={isActive ? "#a100ff" : "#20201f"}
                color="white"
                fontSize="0.86rem"
                _hover={{ bg: isActive ? "#b52cff" : "#2b2b2a" }}
                _focusVisible={{ outline: "3px solid rgba(196, 99, 255, 0.55)", outlineOffset: "3px" }}
                aria-pressed={isActive}
                onClick={() => setCategory(item)}>
                {label}
              </Button>
            );
          })}
        </Flex>

        {filteredCertificates.length > 0 ? (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap="16px">
            {filteredCertificates.map((certificate) => (
              <Box
                key={certificate.id}
                as="article"
                display="flex"
                flexDirection="column"
                overflow="hidden"
                minH="360px"
                justifyContent="space-between"
                bg="#20201f"
                border="1px solid rgba(255, 255, 255, 0.1)"
                borderRadius="18px"
                transition="transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease"
                _hover={{ transform: "translateY(-3px)", borderColor: "rgba(196, 99, 255, 0.55)", boxShadow: "0 18px 40px rgba(0, 0, 0, 0.2)" }}>
                <Button
                  type="button"
                  display="block"
                  w="full"
                  h="216px"
                  p="0"
                  overflow="hidden"
                  borderRadius="0"
                  bg="#f4f3f1"
                  aria-label={`${t.certificates.openAction}: ${certificate.title}`}
                  _hover={{ opacity: 0.9 }}
                  _focusVisible={{ outline: "3px solid rgba(196, 99, 255, 0.55)", outlineOffset: "-3px" }}
                  onClick={() => setSelectedId(certificate.id)}>
                  <Image src={certificate.preview} alt="" w="full" h="full" loading="lazy" decoding="async" objectFit="contain" />
                </Button>
                <Box px={{ base: "18px", md: "20px" }} pt="18px" pb="20px">
                  <Flex align="center" justify="space-between" gap="12px" mb="9px">
                    <Text color="#c463ff" fontSize="0.74rem" fontWeight="700">
                      {t.certificates.categories[certificate.category] ?? certificate.category}
                    </Text>
                    <Text color="#8f8b87" fontSize="0.7rem" fontWeight="800" letterSpacing="0.08em">
                      PDF
                    </Text>
                  </Flex>
                  <Heading as="h2" fontSize="1.02rem" lineHeight="1.35" fontWeight="700">
                    {certificate.title}
                  </Heading>
                  <Button
                    type="button"
                    mt="16px"
                    minH="40px"
                    px="14px"
                    border="1px solid rgba(255, 255, 255, 0.15)"
                    borderRadius="full"
                    bg="transparent"
                    color="white"
                    fontSize="0.82rem"
                    _hover={{ bg: "rgba(161, 0, 255, 0.16)", borderColor: "#c463ff" }}
                    _focusVisible={{ outline: "3px solid rgba(196, 99, 255, 0.55)", outlineOffset: "3px" }}
                    onClick={() => setSelectedId(certificate.id)}>
                    {t.certificates.openAction}
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        ) : (
          <Box p={{ base: "28px", md: "44px" }} textAlign="center" bg="#20201f" border="1px solid rgba(255, 255, 255, 0.1)" borderRadius="18px">
            <Text color="#aaa5a1">{t.certificates.emptyText}</Text>
          </Box>
        )}
      </Box>

      {selectedCertificate ? (
        <Box
          position="fixed"
          inset="0"
          zIndex="1100"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: "12px", md: "28px" }}
          bg="rgba(0, 0, 0, 0.78)"
          backdropFilter="blur(8px)"
          role="dialog"
          aria-modal="true"
          aria-label={selectedCertificate.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedId(null);
            }
          }}>
          <Box w="min(1040px, 100%)" h="min(92svh, 900px)" overflow="hidden" bg="#20201f" border="1px solid rgba(255, 255, 255, 0.15)" borderRadius={{ base: "14px", md: "22px" }} boxShadow="0 28px 90px rgba(0, 0, 0, 0.45)">
            <Flex minH="70px" align="center" justify="space-between" gap="14px" px={{ base: "16px", md: "24px" }} borderBottom="1px solid rgba(255, 255, 255, 0.1)">
              <Box minW="0">
                <Text color="#c463ff" fontSize="0.72rem" fontWeight="800" letterSpacing="0.08em">
                  {t.certificates.previewTitle}
                </Text>
                <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" fontWeight="700">
                  {selectedCertificate.title}
                </Text>
              </Box>
              <Button
                type="button"
                minW="44px"
                w="44px"
                h="44px"
                p="10px"
                borderRadius="full"
                bg="transparent"
                color="white"
                aria-label={t.certificates.closeAction}
                _hover={{ bg: "rgba(255, 255, 255, 0.1)" }}
                _focusVisible={{ outline: "3px solid rgba(196, 99, 255, 0.55)", outlineOffset: "3px" }}
                onClick={() => setSelectedId(null)}>
                <CloseIcon />
              </Button>
            </Flex>
            <Box h="calc(100% - 70px)" bg="#2b2b2a">
              <object data={`${selectedCertificate.file}#toolbar=0&navpanes=0`} type="application/pdf" title={selectedCertificate.title} width="100%" height="100%">
                <Flex h="full" direction="column" align="center" justify="center" gap="18px" p="28px" textAlign="center">
                  <Text color="#b6b2af">{t.certificates.emptyText}</Text>
                  <Link href={selectedCertificate.file} target="_blank" rel="noreferrer" color="#d08aff" fontWeight="700">
                    {t.certificates.openAction}
                  </Link>
                </Flex>
              </object>
            </Box>
            <Flex position="absolute" bottom={{ base: "28px", md: "48px" }} left="50%" gap="10px" transform="translateX(-50%)">
              <Link {...actionStyles} href={selectedCertificate.file} download bg="#a100ff" border="1px solid #a100ff" color="white">
                <DownloadIcon />
                {t.certificates.downloadAction}
              </Link>
              <Link {...actionStyles} href={selectedCertificate.file} target="_blank" rel="noreferrer" bg="#20201f" border="1px solid rgba(255, 255, 255, 0.18)" color="white">
                <ExternalLinkIcon />
                {t.resume.openAction}
              </Link>
            </Flex>
          </Box>
        </Box>
      ) : null}
    </PageShell>
  );
}
