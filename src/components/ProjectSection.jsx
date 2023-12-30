import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import { project } from "../../data";
import { Flip, Slide, Zoom } from "react-reveal";
function ProjectSection() {
  return (
    <div id="Projects" className="h-auto pb-32 bg-section bg-fixed">
      <div className="container pt-32">
        <Zoom right>
          <h1 className="text-3xl  md:text-5xl flex-col  text-primary-foreground font-bold text-center ">
            <span className="border-b-4 border-primary">Pro</span>jects
          </h1>
        </Zoom>
        <div className="mt-10 flex justify-center">
          <Tabs defaultValue="Web-Apps" className="w-fit text-center mt-20">
            <Slide right>
              <TabsList>
                <TabsTrigger value="Web-Apps">Web-Apps</TabsTrigger>
                <TabsTrigger value="Python">Python</TabsTrigger>
                <TabsTrigger value="CAD">CAD</TabsTrigger>
                <TabsTrigger value="SaaS">SaaS</TabsTrigger>
              </TabsList>
            </Slide>
            {project.map((item) => (
              <TabsContent
                key={item.id}
                value={item.cardTitle}
                className="text-primary-foreground"
              >
                <Flip bottom>
                  <ProjectCard projectItem={item} />
                </Flip>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
