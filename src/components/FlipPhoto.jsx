import { useRef, useState } from "react";
import "../styles/flipphoto.css";

export default function FlipPhoto({
  frontSrc = "/Images/Main.jpg",
  backSrc = "/Images/im.jpg",
  alt = "Main photo",
  size = 320, // можно менять
}) {
  const ref = useRef(null);
  const [dir, setDir] = useState(null); // "left" | "right" | null

  const onEnter = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const isLeft = x < rect.width / 2;

    setDir(isLeft ? "right" : "left"); // вошёл слева -> крутится слева-направо
  };

  const onLeave = () => setDir(null);

  return (
    <div
      ref={ref}
      className={`main-photo ${dir ? `is-flipped flip-${dir}` : ""}`}
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      style={{ width: size, height: size }}
      aria-label={alt}>
      <div className="main-photo__inner">
        {/* FRONT */}
        <div className="main-photo__face main-photo__front">
          <img className="main-photo__img" src={frontSrc} alt={alt} />
        </div>

        {/* BACK */}
        <div className="main-photo__face main-photo__back">
          <img className="main-photo__img" src={backSrc} alt={`${alt} back`} />
        </div>
      </div>
    </div>
  );
}
