import React from "react";
import { Link } from "react-scroll";
import Button from "../layouts/button";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const backgroundColor = "bg-white";
  return (
    <div>
      <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
        <div className=" flex items-center">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer"
          >
            <h1 className=" font-semibold text-xl  cursor-pointer">
              TripPixie
            </h1>
          </Link>
        </div>
        <nav className=" hidden lg:flex flex-row items-center gap-6">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Destination
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            about
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <div className=" flex flex-row gap-8  items-center">
          <h1 className=" hover:text-brightColor transition-all cursor-pointer ">
            Register
          </h1>
          <Button title="Login" backgroundColor={backgroundColor} />
        </div>
        <div className=" flex items-center p-2">
        <CiMenuBurger color="white" size={25}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
