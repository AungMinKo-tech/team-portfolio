import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const SparklesEffect = () => {
  const [init, setInit] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0"
      options={{
        fpsLimit: 120,
        particles: {
          color: { value: isDarkMode ? "#D4AF37" : "#1A237E" },
          move: {
            enable: true,
            direction: "top",
            speed: { min: 0.5, max: 1.5 },
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 70,
          },
          opacity: {
            value: { min: 0.2, max: 0.6 },
            animation: { enable: true, speed: 1, sync: false },
          },
          size: {
            value: { min: 1, max: 3 },
          },
          shape: {
            type: ["circle", "square", "triangle", "polygon"],
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default SparklesEffect;
