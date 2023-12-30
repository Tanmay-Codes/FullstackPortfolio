import { FaLinkedin } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, Slide, Zoom } from "react-reveal";
// import env from "dotenv";
function ContactSection() {
  // env.config();
  const [input, setInput] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast({
      title: "Your Message has been sent",
      description: `hey, ${input.name} your message :  ${input.message}, Is been sent to Tanmay Agrawal.`,
    });
    setInput({ name: "", email: "", message: "" });
  };
  return (
    <div id="Contact" className="h-auto md:h-full pb-32 bg-section bg-fixed">
      <div className="container pt-32">
        <Slide left>
          <h1 className="text-3xl md:text-5xl flex-col  text-primary-foreground font-bold text-center ">
            <span className="border-b-4 border-primary">Con</span>tact Me
          </h1>
        </Slide>
        <p className="flex text-2xl  space-x-3 text-primary-foreground/70 justify-center mt-10 mb-20">
          <Bounce bottom cascade>
            <a
              href="https://linkedin.com/in/tanmay-agrawal93"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:animate-spin"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.freecodecamp.org/TanmayCode"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:animate-spin"
            >
              <FaFreeCodeCamp />
            </a>
            <a
              href="https://dev.to/tanmaycode"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:animate-spin"
            >
              <FaDev />
            </a>
            <a
              href="https://github.com/Tanmay-Codes"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary hover:animate-spin"
            >
              <FaGithub />
            </a>
          </Bounce>
        </p>
        <Zoom>
          <div className="flex justify-center items-center text-primary-foreground">
            <form ref={form} onSubmit={handleSubmit} className="w-[500px]">
              <Label htmlFor="name">Name</Label>
              <Input
                className="w-full mb-5"
                name="user_name"
                type="text"
                id="name"
                placeholder="Name"
                value={input.name}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <Label htmlFor="email">Email</Label>
              <Input
                className="w-full mb-5"
                name="user_email"
                type="email"
                id="email"
                placeholder="Email"
                value={input.email}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Label htmlFor="email">Message</Label>
              <Textarea
                className="w-full mb-5"
                name="message"
                type="text"
                id="message"
                placeholder="Your Message here"
                value={input.message}
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, message: e.target.value }))
                }
              />
              <Button className="rounded-full" type="submit">
                Send Query
              </Button>
              <Toaster />
            </form>
          </div>
        </Zoom>
        <p className="text-primary-foreground/50 text-center mt-10 italic">
          <Bounce left cascade>
            tanmayagcode@gmail.com
          </Bounce>
        </p>
      </div>
    </div>
  );
}

export default ContactSection;
