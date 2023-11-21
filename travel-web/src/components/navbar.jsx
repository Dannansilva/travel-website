import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
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
            <h1>TripPixie</h1>
          </Link>
        </div>
        <nav className=" flex flex-row items-center gap-6">
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer"
          >
            Features
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer"
          >
            Destination
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer"
          >
            about
          </Link>
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" cursor-pointer"
          >
            Contact
          </Link>
        </nav>
        <div>
          <h1>Register</h1>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
