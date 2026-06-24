import {
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Text,
  chakra,
} from "@chakra-ui/react";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { useLanguage } from "../i18n/context";

const RESUME_PATH = "/Artem%20Khloptsev%20CV.pdf";
const RESUME_VIEW_PATH = `${RESUME_PATH}#view=FitH&toolbar=1&navpanes=0`;
const ResumeObject = chakra("object");

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

const actionStyles = {
  minH: "48px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "9px",
  px: "18px",
  borderRadius: "full",
  color: "white",
  fontSize: "0.92rem",
  fontWeight: "700",
  textDecoration: "none",
  transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease",
  _hover: {
    transform: "translateY(-2px)",
    borderColor: "#c463ff",
    boxShadow: "0 12px 30px rgba(161, 0, 255, 0.28)",
  },
  _focusVisible: {
    outline: "3px solid rgba(196, 99, 255, 0.55)",
    outlineOffset: "3px",
  },
} as const;

export default function ResumePage() {
  const { t } = useLanguage();
  const resume = t.resume;

  return (
    <PageShell>
      <Seo title={t.seo.resume.title} description={t.seo.resume.description} path="/resume" />
      <Box as="main" w="min(1180px, calc(100% - 24px))" mx="auto" pt={{ base: "34px", md: "44px", lg: "64px" }}>
        <Flex as="header" mb={{ base: "20px", md: "28px" }} direction={{ base: "column", lg: "row" }} align={{ base: "flex-start", lg: "flex-end" }} justify="space-between" gap={{ base: "24px", lg: "40px" }}>
          <Box>
            <Heading as="h1" fontSize="clamp(2.4rem, 6vw, 4.5rem)" fontWeight="800" lineHeight="1" letterSpacing="-0.04em">
              {resume.title}
            </Heading>
            <Text maxW="620px" mt="18px" color="#969391" fontSize="clamp(1rem, 1.8vw, 1.15rem)" lineHeight="1.65">
              {resume.subtitle}
            </Text>
          </Box>

          <Flex w={{ base: "full", lg: "auto" }} direction={{ base: "column", sm: "row" }} gap="12px" flex="0 0 auto">
            <Link
              {...actionStyles}
              flex={{ base: "1 1 0", lg: "0 0 auto" }}
              href={RESUME_PATH}
              download="Artem Khloptsev CV.pdf"
              bg="#a100ff"
              border="1px solid #a100ff"
              boxShadow="0 10px 28px rgba(161, 0, 255, 0.28)">
              <DownloadIcon />
              {resume.downloadAction}
            </Link>
            <Link
              {...actionStyles}
              flex={{ base: "1 1 0", lg: "0 0 auto" }}
              href={RESUME_PATH}
              target="_blank"
              rel="noreferrer"
              bg="#20201f"
              border="1px solid rgba(255, 255, 255, 0.18)">
              <ExternalLinkIcon />
              {resume.openAction}
            </Link>
          </Flex>
        </Flex>

        <Box
          as="section"
          aria-label={resume.viewerTitle}
          minH={{ base: "68svh", md: "760px" }}
          h={{ base: "68svh", md: "auto" }}
          overflow="hidden"
          bg="#252524"
          border="1px solid rgba(255, 255, 255, 0.1)"
          borderRadius={{ base: "14px", md: "22px" }}
          boxShadow="0 28px 80px rgba(0, 0, 0, 0.28)">
          <ResumeObject
            data={RESUME_VIEW_PATH}
            type="application/pdf"
            title={resume.viewerTitle}
            display="block"
            w="full"
            h={{ base: "68svh", md: "min(82vh, 980px)" }}
            minH={{ base: "68svh", md: "760px" }}
            border="0">
            <Flex minH="520px" direction="column" align="center" justify="center" gap="18px" p="32px" textAlign="center">
              <Text maxW="520px" color="#b6b2af" lineHeight="1.6">
                {resume.fallback}
              </Text>
              <Link href={RESUME_PATH} target="_blank" rel="noreferrer" color="#d08aff" fontWeight="700">
                {resume.openAction}
              </Link>
            </Flex>
          </ResumeObject>
        </Box>
      </Box>
    </PageShell>
  );
}
