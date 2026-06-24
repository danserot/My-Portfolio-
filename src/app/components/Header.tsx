import { Box, Button, Flex, Image, Link as ChakraLink } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import { LANGUAGE_OPTIONS, type Language } from "../i18n/types";

interface NavItemProps {
  to: string;
  label: string;
  end?: boolean;
  onClick?: () => void;
}

function NavItem({ to, label, end = false, onClick }: NavItemProps) {
  return (
    <NavLink to={to} end={end} onClick={onClick} style={{ textDecoration: "none" }}>
      {({ isActive }) => (
        <Box
          as="span"
          position="relative"
          display="inline-block"
          py="10px"
          color="white"
          fontSize={{ base: "1.1rem", md: "1.25rem" }}
          fontWeight="700"
          transition="color 0.2s ease"
          _hover={{ color: "rgba(255, 255, 255, 0.62)" }}
          _after={{
            content: '""',
            position: "absolute",
            right: 0,
            bottom: "3px",
            left: 0,
            height: "3px",
            borderRadius: "full",
            background: "#a100ff",
            boxShadow: "0 0 12px rgba(161, 0, 255, 0.72)",
            transform: isActive ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "center",
            transition: "transform 0.2s ease",
          }}>
          {label}
        </Box>
      )}
    </NavLink>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <Box position="relative" w="22px" h="16px" aria-hidden="true">
      {[0, 1, 2].map((line) => {
        const isOuterLine = line !== 1;
        const top = isOpen && isOuterLine ? 7 : line * 7;
        const transform = isOpen
          ? line === 0
            ? "rotate(45deg)"
            : line === 2
              ? "rotate(-45deg)"
              : undefined
          : undefined;

        return (
          <Box
            key={line}
            position="absolute"
            top={`${top}px`}
            left="0"
            w="full"
            h="2px"
            borderRadius="full"
            bg="currentColor"
            opacity={isOpen && line === 1 ? 0 : 1}
            transform={transform}
            transition="top 0.2s ease, transform 0.2s ease, opacity 0.2s ease"
          />
        );
      })}
    </Box>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const labels = t.header.nav;

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const languageSwitch = (
    <Flex
      role="group"
      aria-label={t.header.languageSwitcher}
      align="center"
      gap="1"
      p="1"
      border="1px solid rgba(161, 0, 255, 0.45)"
      borderRadius="full"
      bg="rgba(161, 0, 255, 0.12)"
      boxShadow="0 0 22px rgba(161, 0, 255, 0.18)">
      {LANGUAGE_OPTIONS.map((option) => (
        <Button
          key={option}
          type="button"
          h="auto"
          minW="0"
          px={{ base: "10px", md: "12px" }}
          py={{ base: "7px", md: "8px" }}
          borderRadius="full"
          bg={language === option ? "#a100ff" : "transparent"}
          color={language === option ? "white" : "rgba(255, 255, 255, 0.72)"}
          fontSize={{ base: "0.82rem", md: "0.9rem" }}
          fontWeight="700"
          boxShadow={language === option ? "0 0 18px rgba(161, 0, 255, 0.42)" : "none"}
          transition="background 0.2s ease, color 0.2s ease, transform 0.2s ease"
          _hover={{ bg: "#a100ff", color: "white", transform: "translateY(-1px)" }}
          aria-pressed={language === option}
          onClick={() => setLanguage(option as Language)}>
          {option.toUpperCase()}
        </Button>
      ))}
    </Flex>
  );

  return (
    <>
      <Flex
        as="header"
        position="relative"
        zIndex="1000"
        w="full"
        minH={{ base: "68px", md: "72px" }}
        align="center"
        justify="space-between"
        gap="6"
        px={{ base: "16px", md: "24px" }}
        bg="#191919"
        boxShadow="0 4px 16px -2px rgba(0, 0, 0, 0.1)">
        <RouterLink to="/" onClick={closeMenu}>
          <Image src="/Images/sign-removebg-preview.png" alt={t.header.logoAlt} h={{ base: "64px", md: "72px" }} />
        </RouterLink>

        <Flex as="nav" display={{ base: "none", md: "flex" }} align="center" justify="space-around" gap="22px" flex="1" maxW="760px">
          <NavItem to="/" label={labels.home} end />
          <NavItem to="/projects" label={labels.projects} />
          <NavItem to="/about" label={labels.about} />
          <NavItem to="/resume" label={labels.resume} />
          <ChakraLink
            href="https://t.me/@Artem_Khloptsev"
            target="_blank"
            rel="noreferrer"
            color="white"
            fontSize="1.25rem"
            fontWeight="700"
            py="10px"
            textDecoration="none"
            _hover={{ color: "rgba(255, 255, 255, 0.62)" }}>
            {labels.contact}
          </ChakraLink>
        </Flex>

        <Flex align="center" gap={{ base: "8px", md: "14px" }}>
          {languageSwitch}
          <Button
            type="button"
            display={{ base: "grid", md: "none" }}
            placeItems="center"
            w="36px"
            h="36px"
            minW="36px"
            p="7px"
            bg="transparent"
            color="white"
            aria-label={t.header.menuLabel}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}>
            <MenuIcon isOpen={isOpen} />
          </Button>
        </Flex>

        <Flex
          as="nav"
          display={{ base: isOpen ? "flex" : "none", md: "none" }}
          position="absolute"
          top="76px"
          right="16px"
          zIndex="1000"
          minW="210px"
          direction="column"
          align="flex-start"
          gap="12px"
          px="20px"
          py="18px"
          bg="#191919"
          border="1px solid rgba(255, 255, 255, 0.08)"
          borderRadius="14px"
          boxShadow="0 18px 40px rgba(0, 0, 0, 0.32)">
          <NavItem to="/" label={labels.home} end onClick={closeMenu} />
          <NavItem to="/projects" label={labels.projects} onClick={closeMenu} />
          <NavItem to="/about" label={labels.about} onClick={closeMenu} />
          <NavItem to="/resume" label={labels.resume} onClick={closeMenu} />
          <ChakraLink href="https://t.me/@Artem_Khloptsev" color="white" fontSize="1.1rem" fontWeight="700" py="10px" textDecoration="none">
            {labels.contact}
          </ChakraLink>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box position="fixed" inset="0" zIndex="999" bg="rgba(0, 0, 0, 0.6)" backdropFilter="blur(4px)" onClick={closeMenu} />
      ) : null}
    </>
  );
}
