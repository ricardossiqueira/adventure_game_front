import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particles } from "../../config/particles";

export function AnimatedCanvas() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particles.options}
    />
  );
}
