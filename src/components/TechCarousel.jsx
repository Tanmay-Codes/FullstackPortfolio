import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Javascript from "../assets/svg/javascript.svg";
import html5 from "../assets/svg/html5.svg";
import css3 from "../assets/svg/css3.svg";
import react from "../assets/svg/react.svg";
import mongodb from "../assets/svg/mongodb.svg";
import nodejs from "../assets/svg/nodejs.svg";
import python from "../assets/svg/python.svg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function TechCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 2000 }));
  const logos = [Javascript, html5, css3, react, nodejs, mongodb, python];

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" w-20 mt-5"
      //   onMouseEnter={plugin.current.stop}
      //   onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {logos.map((item, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-none">
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <img
                    src={item}
                    width="40px"
                    height="40px"
                    alt="javascript svg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
