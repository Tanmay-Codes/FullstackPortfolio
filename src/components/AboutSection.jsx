import me from "../assets/small.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaBriefcase } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoNewspaperSharp } from "react-icons/io5";
import { about } from "../../data";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { Bounce, Slide, Zoom } from "react-reveal";
function AboutSection() {
  let icons = [
    {
      icon: <FaBriefcase />,
    },
    {
      icon: <FaGear />,
    },
    {
      icon: <FaUserGraduate />,
    },
    {
      icon: <IoNewspaperSharp />,
    },
  ];
  return (
    <div id="About" className="h-auto pb-32 bg-background">
      <div className="container pt-32">
        <Zoom>
          <h1 className="text-3xl md:text-5xl flex-col  text-primary-foreground font-bold text-center ">
            <span className="border-b-4 border-primary">Abo</span>ut Me
          </h1>
        </Zoom>
        <div className=" md:flex md:space-x-20 mt-10 items-center justify-center">
          <div className="flex justify-center">
            <Slide left>
              <img
                src={me}
                className=" shadow-2xl rounded-2xl hover:shadow-lg shadow-black h-[200px]  md:h-[400px] mt-20 text-primary-foreground"
                alt="Me standing in front of a mountain with the sun setting behind me."
              />
            </Slide>
          </div>
          <div className=" mt-5 md:mt-0 flex justify-center ">
            <Slide right>
              <Card className="bg-black w-screen md:w-[40vw] text-primary-foreground border-primary ">
                <CardContent>
                  {about.map((item) => (
                    <Accordion key={item.id} type="single" collapsible>
                      <AccordionItem value={`item-${item.id}`}>
                        <AccordionTrigger className=" text-md md:text-lg hover:text-primary">
                          <p className="flex items-center space-x-2">
                            {icons[item.id - 1].icon}
                            <span>{item.title}</span>
                          </p>
                        </AccordionTrigger>
                        <AccordionContent className="text-sm md:text-lg">
                          {item.work?.map((job) => (
                            <ul key={job.id}>
                              <li className="p-2">
                                <div className="flex items-center justify-between">
                                  <p>
                                    {job.title}
                                    <p className="text-sm text-primary">
                                      {job.company}
                                    </p>
                                  </p>
                                  <p className="text-sm">{job.timeRange}</p>
                                </div>
                              </li>
                            </ul>
                          ))}
                          <p>{item.skill}</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </CardContent>
              </Card>
            </Slide>
          </div>
        </div>
      </div>
      <p className="mt-20 flex justify-center text-center md:text-2xl text-primary-foreground">
        <Bounce cascade right>
          <FaQuoteLeft className="text-primary mr-2" />
          My lifes algorithm - Do great things in life, while not dead!
          <FaQuoteRight className="text-primary ml-2" />
        </Bounce>
      </p>
    </div>
  );
}

export default AboutSection;
