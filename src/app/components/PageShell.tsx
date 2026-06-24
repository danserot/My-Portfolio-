import { Box, type BoxProps } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import CursorParticles from "./CursorParticles";
import Footer from "./Footer";
import Header from "./Header";

export default function PageShell({ children, ...props }: PropsWithChildren<BoxProps>) {
  return (
    <Box minH="100vh" {...props}>
      <Header />
      {children}
      <Footer />
      <CursorParticles />
    </Box>
  );
}
