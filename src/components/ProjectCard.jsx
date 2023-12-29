/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
function ProjectCard(props) {
  return (
    <Card className="bg-black/50 max-h-[70vh] overflow-scroll no-scrollbar  text-primary-foreground border-primary/30 shadow-lg p-5 rounded-3xl shadow-gray-800 mt-10">
      <CardHeader>
        <CardTitle>{props.projectItem.cardTitle}</CardTitle>
        <CardDescription>{props.projectItem.cardDescription}</CardDescription>
      </CardHeader>
      {props.projectItem.projects.map((item) => (
        <CardContent key={item.id} className="">
          <p className="text-lg mb-5 underline underline-offset-8">
            {item.title}
          </p>
          <div className="md:flex   space-x-4">
            <div className="flex-col w-[150px] items-center justify-center">
              <img
                className="w-[150px] inline-block h-[100px]"
                src={item.image}
                alt="project image"
              />
              <div className="flex gap-2 justify-center items-center mt-2">
                <a
                  className="cursor-pointer"
                  href={item.git}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-primary text-2xl" />
                </a>
                {item.live && (
                  <a
                    className="cursor-pointer"
                    href={item.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaChrome className="text-primary text-2xl" />
                  </a>
                )}
              </div>
            </div>

            <div className="w-fit h-fit overflow-scroll md:overflow-hidden">
              <p className="text-start">
                <span className="text-primary mr-2 text-lg">
                  Project description :
                </span>{" "}
                {item.description}
              </p>
              <p className="text-start mt-2 ">
                <span className="text-lg mr-2 text-primary">Tech stack :</span>
                {item.stack}
              </p>
              <p className="text-start mt-2 ">
                <span className="text-lg mr-2 text-primary">Status :</span>
                {item.status}
              </p>
            </div>
          </div>
        </CardContent>
      ))}
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
}

export default ProjectCard;
