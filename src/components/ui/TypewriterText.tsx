"use client";

import { useEffect, useState } from "react";
import styles from "./TypewriterText.module.css";

export function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [visibleText, setVisibleText] = useState(text);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setTimeout>;
    let index = 0;
    const characters = Array.from(text);

    function typeNextCharacter() {
      setVisibleText(characters.slice(0, index).join(""));
      if (index < characters.length) {
        index += 1;
        timer = setTimeout(typeNextCharacter, index === 1 ? delay : 75);
      }
    }

    function handleMotionChange() {
      clearTimeout(timer);
      setVisibleText(text);
    }

    if (!motion.matches) timer = setTimeout(typeNextCharacter, 0);
    motion.addEventListener("change", handleMotionChange);
    return () => {
      clearTimeout(timer);
      motion.removeEventListener("change", handleMotionChange);
    };
  }, [text, delay]);

  return (
    <span className="relative block text-accent">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible block">
        {text}
      </span>
      <span aria-hidden="true" className="absolute inset-0">
        {visibleText}
        <span className={styles.cursor} />
      </span>
    </span>
  );
}
