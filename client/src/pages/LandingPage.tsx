import {
  PresentationControls,
  Environment,
  Float,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Button from "../components/common/Button";
import Navbar from "../components/common/Navbar";
import { Link } from "react-router-dom";
import RocketModel from "../assets/Model.glb?url";
import Heatmap from "../assets/HeatMap..jpg";
import TextButton from "../components/common/TextButton";

function LandingPage() {
  const char1 = useGLTF(RocketModel);

  return (
    <>
      <Navbar className="z-10 relative" />
      <div className="-mt-16 container mx-auto px-8 md:px-12 lg:px-20 pb-24">
        <section className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 p-8 lg:p-16">
            <h1 className="text-4xl md:text-7xl font-bold uppercase">
              <span className="gradient-text">SKILLFORGE</span>
            </h1>
            <h1 className="text-1xl md:text-4xl font-medium">
              Build Skills. Track Progress. Forge Your Future.
            </h1>
            <p className="mt-8 opacity-90">
              SkillForge is a habit and skill tracking platform designed to help you stay consistent, build productive routines, and achieve long-term growth through daily progress tracking.
            </p>
            <div className="mt-4 md:mt-8 flex gap-4">
              <Link to="/signup">
                <Button className="" color="primary">
                  SIGN UP
                </Button>
              </Link>
              <Link to="/signin">
                <TextButton className="">SIGN IN</TextButton>
              </Link>
            </div>
          </div>
          <div className="w-full h-160">
            <Canvas camera={{ fov: 20, position: [4, 2, 6] }}>
              <PresentationControls
                global
                rotation={[0, 0.3, 0]}
                polar={[0, 0]}
                azimuth={[-2, 2]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >
                <hemisphereLight
                  groundColor={0x3a5cd6}
                  color={0xffffff}
                  intensity={2.5}
                />
                <Environment preset="city" />
                <Float speed={1} rotationIntensity={2}>
                  <primitive object={char1.scene} />
                </Float>
              </PresentationControls>
              <ContactShadows
                opacity={0.4}
                scale={5}
                blur={2.4}
                position-y={-1}
              />
            </Canvas>
          </div>
        </section>
        <section className="py-24 max-md:px-16 max-md:py-12">
          <div className="w-full md:w-160 text-xl max-md:text-sm">
            <h1 className="text-1xl md:text-4xl font-medium uppercase opacity-90">
              What is
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold uppercase">
              <span className="gradient-text">SKILLFORGE?</span>
            </h1>
            <p className="mt-8 opacity-90">
              SkillForge is a personal growth platform that helps users track skills, habits, and daily progress. It provides a structured way to stay consistent, monitor performance, and build long-term discipline through measurable progress.
            </p>
          </div>
        </section>
        <section className="py-24 max-md:py-12 flex justify-between max-md:px-16 max-md:gap-4 max-md:flex-col max-md:justify-center">
          <div className="md:w-160 text-xl max-md:text-sm">
            <h1 className="text-1xl md:text-4xl font-medium uppercase opacity-90">
              Consistency
            </h1>
            <h1 className="text-4xl md:text-7xl font-bold uppercase">
              <span className="gradient-text">HEATMAPS</span>
            </h1>
            <p className="mt-8 opacity-90">
              The heatmap feature in SkillForge provides a visual representation of your daily activity and progress. It helps you identify patterns, maintain consistency, and stay motivated by tracking your growth over time.
            </p>
          </div>
          <img
            className="object-contain origin-right scale-75 max-md:scale-100"
            src={Heatmap}
            alt=""
          />
        </section>
      </div>
    </>
  );
}

export default LandingPage;
