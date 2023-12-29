import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { testimonial } from "../../data";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Slide, Zoom } from "react-reveal";
function TestimonialSection() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div id="Testimonials" className=" h-auto md:h-full pb-40 bg-background">
      <div className="container pt-32">
        <Zoom>
          <h1 className="text-5xl flex-col  text-primary-foreground font-bold text-center ">
            <span className="border-b-4 border-primary">Test</span>imonials
          </h1>
        </Zoom>
        <Slide left>
          <div className="mt-32 flex justify-center ">
            <Carousel
              plugins={[plugin.current]}
              className="text-primary-foreground max-w-[50vw]"
            >
              <CarouselContent>
                {testimonial.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className="flex-col w-fit justify-center items-center space-x-5">
                      <Avatar className="w-[100px] h-[100px]">
                        <AvatarImage src={item.image} />
                        <AvatarFallback className="bg-black/25 ">
                          {item.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="mt-3">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <p className="text-md text-primary italic">
                          {item.designation}
                        </p>
                        <p className="text-md text-primary italic">
                          {item.company}
                        </p>
                        <blockquote className="flex max-w-[800px] text-xl mt-3">
                          <FaQuoteLeft className="text-primary mr-2" />
                          {item.quote}
                          <FaQuoteRight className="text-primary ml-1" />
                        </blockquote>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default TestimonialSection;
