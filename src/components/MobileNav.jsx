import { Link } from "react-scroll";
import { menu } from "../../data";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function MobileNav() {
  const [nav, setNav] = useState(false);
  return (
    <div onClick={() => setNav(!nav)} className="block md:hidden">
      <button
        onClick={() => setNav(!nav)}
        className={!nav ? "text-primary-foreground text-xl" : "hidden"}
      >
        <IoIosMenu />
      </button>
      <nav
        className={
          nav
            ? "navbar is-info text-primary-foreground bg-black fixed left-0 top-0 w-[50%] h-full duration-300 ease-in-out"
            : "fixed top-0 left-[-100%] duration-300 ease-in-out"
        }
        role="navigation"
        aria-label="main navigation"
      >
        <div className="flex justify-between p-4">
          <p>TA</p>
          <button
            onClick={() => setNav(!nav)}
            className={nav ? "text-primary-foreground text-xl" : "hidden"}
          >
            <IoMdClose />
          </button>
        </div>
        <ul className="pt-24">
          {menu.map((items) => (
            <li
              key={items.id}
              className=" link-underline link-underline-black p-4"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={items.menuItem}
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
              >
                {items.menuItem}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default MobileNav;
