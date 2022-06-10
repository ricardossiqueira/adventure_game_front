import { theme } from "@chakra-ui/react";
import { IParticlesProps } from "react-tsparticles";

export const particles: IParticlesProps = {
  options: {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    background: {
      color: {
        value: theme.colors.gray[900],
      },
    },
    particles: {
      color: {
        value: theme.colors.gray[50],
      },
      links: {
        color: theme.colors.gray[50],
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 60,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  },
};
