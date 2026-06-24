import { Box, type BoxProps } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import type { PropsWithChildren } from "react";
import { useLocation } from "react-router-dom";
import CursorParticles from "./CursorParticles";
import Footer from "./Footer";
import Header from "./Header";

const pageEnter = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export default function PageShell({ children, ...props }: PropsWithChildren<BoxProps>) {
  const location = useLocation();

  return (
    <Box minH="100vh" {...props}>
      <Header />
      <Box
        key={location.pathname}
        animation={`${pageEnter} 360ms ease both`}
        css={{
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}>
        {children}
      </Box>
      <Footer />
      <CursorParticles />
    </Box>
  );
}
