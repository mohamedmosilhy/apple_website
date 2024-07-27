import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { y: 0, opacity: 1 });
    gsap.to(".link", { y: 0, opacity: 1, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section
      id="heighlights"
      className=" w-screen overflow-hidden bg-zinc h-full common-padding"
    >
      <div className="screen-max-width ">
        <div className=" mb-12 w-full items-end justify-between md:flex ">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex items-end gap-5 flex-wrap">
            <p className="link">
              Watch the film <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch the event{" "}
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
      </div>

      <VideoCarousel />
    </section>
  );
};

export default Highlights;
