import React, { useState } from "react";
import { XIcon, MenuIcon, MoveLeftIcon } from "lucide-react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  let Links = [
    { name: "Introduction", link: "introduction" },
    { name: "Projects", link: "projects" },
  ];
  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="w-full max-w-7xl ">
      <div className="md:flex items-center justify-between py-2 md:px-10 px-7 sticky ">
        {/* logo section */}
        <div className="flex justify-between space-x-4">
          {/* Back Icon */}
          <div
            className="cursor-pointer md:hidden w-7 h-7 text-white"
            onClick={() => navigate("/portfolio")}
          >
            <MoveLeftIcon />
          </div>
          <div className="font-bold cursor-pointer flex items-center gap-1">
            <p className="text-primary lg:text-xl text-sm hover:text-white text-center">
              {props.title}
            </p>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer md:hidden w-7 h-7 text-white"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </div>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static  md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold" key={link.name}>
              <button>
                <Link
                  to={link.link}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  className="text-white hover:text-primary duration-500"
                >
                  {link.name}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
