import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import { TechCarousel } from "./TechCarousel";
import { Link } from "react-scroll";
import resume from "../assets/files/Resume.pdf";
import { RandomReveal } from "react-random-reveal";
import { Bounce, Slide, Zoom } from "react-reveal";

function Hero() {
  return (
    <div
      id="Home"
      className="container  m-auto p-5 h-full flex flex-col justify-center "
    >
      <Zoom>
        <span className="text-primary text-3xl mb-2">
          <Bounce bottom cascade>
            Hello, I am a..
          </Bounce>{" "}
        </span>
        <h1 className="text-7xl text-accent font-serif font-bold">
          <RandomReveal
            isPlaying
            duration={5}
            revealDuration={0.7}
            characters="Fullstack Engineer"
            onComplete={() => ({ shouldRepeat: true, delay: 20 })}
          />
        </h1>
        <Slide>
          <p className="text-accent mt-4 text-2xl  ">
            I am Expert in{" "}
            <span className="inline-block w-auto text-primary w-100">
              {
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " MERN Stack Web-App Development ",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    " Python Automation Scripting",
                    1000,
                    " CAD Parametric Modelling",
                    1000,
                    " Point cloud and Scan To BIM",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              }
            </span>
          </p>
        </Slide>
        <div className="flex gap-4 mt-5 items-center">
          <Link
            to="Contact"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Button className="rounded-full bg-primary text-black font-bold text-xl ">
              Hire ME!
            </Button>
          </Link>
          <a
            href={resume}
            download="Resume_Doc"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="outline"
              className="rounded-full border-spacing-1 text-accent text-xl"
            >
              Download Resume
            </Button>
          </a>
        </div>
        <div>
          <TechCarousel />
        </div>
      </Zoom>
    </div>
  );
}

export default Hero;
