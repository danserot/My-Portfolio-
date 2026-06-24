import { Box, type BoxProps } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface RevealProps extends BoxProps {
  delay?: number;
}

export default function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={elementRef}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(24px)"}
      transition={`opacity 520ms ease ${delay}ms, transform 520ms ease ${delay}ms`}
      {...props}>
      {children}
    </Box>
  );
}
