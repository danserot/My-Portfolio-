import { useEffect } from "react";

export default function CursorParticles() {
  useEffect(() => {
    const particles = [];

    const createParticle = (x, y) => {
      const el = document.createElement("span");
      el.className = "cursor-particle";

      const size = Math.random() * 14 + 10; // было маленькое
      el.style.width = `${size}px`;
      el.style.height = `${size}px`;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;

      document.body.appendChild(el);

      particles.push(el);

      setTimeout(() => {
        el.remove();
      }, 600);
    };

    const handleMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return null;
}
