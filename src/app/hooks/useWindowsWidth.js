// hooks/useWindowWidth.ts
import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(undefined);

  useEffect(() => {
    // Empêche l'exécution côté serveur
    if (typeof window === "undefined") return;

    const handleResize = () => setWidth(window.innerWidth);
    
    // Set initial width
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

