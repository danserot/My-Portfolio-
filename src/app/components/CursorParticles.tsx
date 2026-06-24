import { useEffect } from "react";

export default function CursorParticles() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const particles = new Set<HTMLSpanElement>();

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("span");
      const size = Math.random() * 14 + 10;

      Object.assign(particle.style, {
        position: "fixed",
        left: `${x}px`,
        top: `${y}px`,
        zIndex: "9999",
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: "none",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(170, 0, 255, 0.18) 0%, rgba(170, 0, 255, 0.08) 45%, transparent 75%)",
        filter: "blur(8px)",
      });

      document.body.appendChild(particle);
      particles.add(particle);

      const animation = particle.animate(
        [
          { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
          { opacity: 0, transform: "translate(-50%, -50%) scale(0.2)" },
        ],
        { duration: 600, easing: "ease-out" },
      );

      animation.onfinish = () => {
        particles.delete(particle);
        particle.remove();
      };
    };

    const handleMove = (event: MouseEvent) => {
      createParticle(event.clientX, event.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      particles.forEach((particle) => particle.remove());
      particles.clear();
    };
  }, []);

  return null;
}
