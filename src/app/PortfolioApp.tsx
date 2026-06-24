import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./i18n/context";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ResumePage from "./pages/ResumePage";

export default function PortfolioApp() {
  return (
    <ChakraProvider value={defaultSystem}>
      <LanguageProvider>
        <Box minH="100vh" bg="#161513" color="white" fontFamily="Poppins, sans-serif">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </LanguageProvider>
    </ChakraProvider>
  );
}
