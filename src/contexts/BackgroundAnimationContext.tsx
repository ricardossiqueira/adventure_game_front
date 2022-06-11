import { createContext, ReactNode, useContext } from "react";

interface BackgroundAnimationProvierProps {
  children: ReactNode;
}

const BackgroundAnimationContext = createContext({});

export function BackgroundAnimationProvider({
  children,
}: BackgroundAnimationProvierProps) {
  return (
    <BackgroundAnimationContext.Provider value={{ pause: false }}>
      {children}
    </BackgroundAnimationContext.Provider>
  );
}

export const useBackgroundAnimationContext = () =>
  useContext(BackgroundAnimationContext);
