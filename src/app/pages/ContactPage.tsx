import { Box, Button, Flex, Heading, Input, Text, Textarea } from "@chakra-ui/react";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import PageShell from "../components/PageShell";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { useLanguage } from "../i18n/context";

const fieldStyles = {
  bg: "rgba(255, 255, 255, 0.04)",
  border: "1px solid rgba(255, 255, 255, 0.12)",
  borderRadius: "14px",
  color: "white",
  _focus: { borderColor: "#a100ff", boxShadow: "0 0 0 3px rgba(161, 0, 255, 0.16)" },
} as const;

export default function ContactPage() {
  const { t } = useLanguage();
  const contact = t.contact;
  const navigate = useNavigate();
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "error">("idle");
  const isSubmitting = submitState === "submitting";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();

    formData.forEach((value, key) => body.append(key, value.toString()));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error(`Netlify Forms returned ${response.status}`);
      }

      navigate("/thanks");
    } catch (error) {
      console.error("Contact form submission failed", error);
      setSubmitState("error");
    }
  }

  return (
    <PageShell>
      <Seo title={t.seo.contact.title} description={t.seo.contact.description} path="/contact" />
      <Flex as="main" w="min(960px, 92%)" mx="auto" py={{ base: "56px", md: "84px" }} direction={{ base: "column", md: "row" }} gap={{ base: "36px", md: "64px" }} align="flex-start">
        <Reveal flex="1">
          <Heading as="h1" fontSize={{ base: "38px", md: "56px" }} lineHeight="1.08" fontWeight="800">
            {contact.title}
          </Heading>
          <Text mt="20px" color="rgba(255, 255, 255, 0.68)" fontSize="18px" lineHeight="1.75">
            {contact.subtitle}
          </Text>
        </Reveal>

        <Reveal flex="1.2" w="full">
        <Box
          p={{ base: "22px", md: "30px" }}
          bg="rgba(255, 255, 255, 0.045)"
          border="1px solid rgba(255, 255, 255, 0.09)"
          borderRadius="22px">
          <form
            name="contact"
            method="POST"
            action="/thanks"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <Box display="none" aria-hidden="true">
            <label>Do not fill this field<input name="bot-field" /></label>
          </Box>

          <Box mb="18px">
            <Box asChild display="block" mb="8px" fontSize="14px" fontWeight="700">
              <label htmlFor="contact-name">{contact.nameLabel}</label>
            </Box>
            <Input id="contact-name" name="name" required autoComplete="name" h="50px" {...fieldStyles} />
          </Box>
          <Box mb="18px">
            <Box asChild display="block" mb="8px" fontSize="14px" fontWeight="700">
              <label htmlFor="contact-email">{contact.emailLabel}</label>
            </Box>
            <Input id="contact-email" name="email" type="email" required autoComplete="email" h="50px" {...fieldStyles} />
          </Box>
          <Box mb="22px">
            <Box asChild display="block" mb="8px" fontSize="14px" fontWeight="700">
              <label htmlFor="contact-message">{contact.messageLabel}</label>
            </Box>
            <Textarea id="contact-message" name="message" required minH="160px" resize="vertical" {...fieldStyles} />
          </Box>
          {submitState === "error" ? (
            <Box mb="16px" p="14px" role="alert" bg="rgba(255, 92, 92, 0.1)" border="1px solid rgba(255, 92, 92, 0.35)" borderRadius="12px">
              <Text color="#ffb1b1" fontSize="14px" lineHeight="1.6">
                {contact.errorText}{" "}
                <Box asChild color="white" textDecoration="underline">
                  <a href="mailto:tema324756@gmail.com">tema324756@gmail.com</a>
                </Box>
              </Text>
            </Box>
          ) : null}
          <Button type="submit" disabled={isSubmitting} w="full" h="50px" bg="#a100ff" color="white" borderRadius="full" fontWeight="800" opacity={isSubmitting ? 0.7 : 1} _hover={{ bg: "#b52bff", transform: "translateY(-1px)" }}>
            {isSubmitting ? contact.submittingAction : contact.submitAction}
          </Button>
          <Text mt="14px" color="rgba(255, 255, 255, 0.5)" fontSize="12px" textAlign="center">{contact.privacyNote}</Text>
          </form>
        </Box>
        </Reveal>
      </Flex>
    </PageShell>
  );
}
