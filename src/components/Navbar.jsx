import useScrollPosition from "../hooks/useScrollPosition";
import { Link } from "react-scroll";
import { menu } from "../../data";
import MobileNav from "./MobileNav";
import { Bounce, Fade, Slide } from "react-reveal";

function Navbar() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={classNames(
        scrollPosition > 0
          ? "shadow-lg bg-black/75 shadow-black"
          : "shadow-none",
        "fixed top-0 w-screen z-50 "
      )}
    >
      <div className="  container p-4 mx-auto flex justify-between items-center">
        <Slide left>
          <div className="font-sans font-bold text-accent text-3xl">
            <Bounce cascade left>
              <a href="/" className="text-primary">
                Tanmay Agrawal
              </a>
            </Bounce>
          </div>
        </Slide>
        <div className="navigation text-accent">
          <MobileNav />
          <nav className="hidden md:block">
            <ul className="flex items-center gap-x-4">
              {menu.map((items) => (
                <Fade right key={items.id}>
                  <li className=" link-underline link-underline-black">
                    <Link
                      to={items.menuItem}
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      <Bounce cascade right>
                        {items.menuItem}
                      </Bounce>
                    </Link>
                  </li>
                </Fade>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
