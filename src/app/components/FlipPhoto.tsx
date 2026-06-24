import { Box, Image } from "@chakra-ui/react";
import { type PointerEvent, useRef, useState } from "react";

interface FlipPhotoProps {
  frontSrc?: string;
  backSrc?: string;
  alt?: string;
  size?: number;
}

type FlipDirection = "left" | "right" | null;

export default function FlipPhoto({
  frontSrc = "/Images/Main.jpg",
  backSrc = "/Images/im.jpg",
  alt = "Main photo",
  size = 320,
}: FlipPhotoProps) {
  const photoRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<FlipDirection>(null);

  const handlePointerEnter = (event: PointerEvent<HTMLDivElement>) => {
    const photo = photoRef.current;

    if (!photo) {
      return;
    }

    const rect = photo.getBoundingClientRect();
    const enteredFromLeft = event.clientX - rect.left < rect.width / 2;
    setDirection(enteredFromLeft ? "right" : "left");
  };

  const rotation =
    direction === "right" ? "rotateY(180deg)" : direction === "left" ? "rotateY(-180deg)" : "rotateY(0deg)";

  return (
    <Box
      ref={photoRef}
      aria-label={alt}
      w={{ base: `${Math.min(size, 280)}px`, sm: `${size}px` }}
      h={{ base: `${Math.min(size, 280)}px`, sm: `${size}px` }}
      mx="auto"
      borderRadius="full"
      css={{ perspective: "1000px" }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={() => setDirection(null)}>
      <Box
        position="relative"
        w="full"
        h="full"
        borderRadius="full"
        transition="transform 560ms cubic-bezier(0.2, 0.7, 0.2, 1)"
        transform={rotation}
        css={{ transformStyle: "preserve-3d", willChange: "transform" }}>
        <PhotoFace src={frontSrc} alt={alt} />
        <PhotoFace src={backSrc} alt={`${alt} back`} isBack />
      </Box>
    </Box>
  );
}

interface PhotoFaceProps {
  src: string;
  alt: string;
  isBack?: boolean;
}

function PhotoFace({ src, alt, isBack = false }: PhotoFaceProps) {
  return (
    <Box
      position="absolute"
      inset="0"
      overflow="hidden"
      borderRadius="full"
      border="1px solid rgba(255, 255, 255, 0.1)"
      boxShadow="0 18px 50px rgba(0, 0, 0, 0.35)"
      transform={isBack ? "rotateY(180deg)" : undefined}
      css={{ backfaceVisibility: "hidden" }}>
      <Image src={src} alt={alt} w="full" h="full" objectFit="cover" />
    </Box>
  );
}
