import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className=" flex-col flex-center w-full h-5/6">
        <p className="hero-title" id="hero">
          iPhone 15 Pro
        </p>
        <div className=" w-9/12 md:w-10/12">
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className=" pointer-events-none"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        className="flex flex-col translate-y-20 opacity-0 items-center"
        id="cta"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className=" font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};
export default Hero;
