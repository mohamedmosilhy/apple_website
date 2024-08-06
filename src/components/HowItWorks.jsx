import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";

const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: { trigger: "#chip", start: "20% bottom" },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className=" w-full my-20 flex-center">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="hiw-title">
          A17 Pro chip <br />A monster win for gaming
        </h2>
        <p className="hiw-subtitle">
          It's here. The biggest redesign in the history of Apple GPUs.
        </p>
        <div className="mt-10 md:mt-20 mb-14">
          <div className=" relative h-full flex-center">
            <div className=" overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none "
                preload="none"
                playsInline
                muted
                ref={videoRef}
                autoPlay
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className=" text-gray mt-3 text-center font-semibold">
            Honkai: Star Rail
          </p>
          <div className="hiw-text-container">
            <div className=" flex-1 flex justify-center flex-col">
              <p className="g_fadeIn hiw-text">
                A17 Pro chip is an entirely new class of iPhone chip that
                delivers our{" "}
                <span className="text-white">
                  best graphic performance by far
                </span>
                .
              </p>
            </div>

            <p className="g_fadeIn hiw-text">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex  justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
