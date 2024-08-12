import React, { useState } from "react";
import "../styles/NavBar.css";
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <nav className="  flex justify-between text-white align-middle  p-5 ">
        <div>
          <h2 className="text-3xl cursor-pointer ">Sohaib Task_01</h2>
        </div>
        <div>
          <IoMdClose
            className={`z-20 
              text-center
              text-3xl
              ${
              open ? "block" : "hidden"
              }
             text-white cursor-pointer `}
            onClick={toggleMenu}
          />
        </div>

        <MdMenu
          className={`sm:hidden  text-3xl ${open ? "hidden" : "block"} `}
          onClick={toggleMenu}
        />

        <div className={` hidden  space-x-9  sm:flex`}>
          <a href="">Home</a>
          <a href="">Services</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
      </nav>

      <div
        className={`flex flex-col ${open ? "block" : "hidden"}  sm:hidden`}
        style={{
          backgroundColor: "",
          backdropFilter:'blur(7px)',
          width: "50vw",
          height: "40vh",
          position: "absolute",
          top: "10",
          right: "0px",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "10px",
          gap: "2.5rem",
          borderRadius: "15px",
          textAlign: "center",
          zIndex: "1",
          color:'white'
        }}
      >
        <a href="#" className="  p-2 mr-2">
          Home
        </a>
        <a href="#" className=" p-2 mr-2">
          Services
        </a>
        <a href="#" className=" p-2 mr-2">
          About Us
        </a>
        <a href="#" className=" p-2 mr-2">
          Contact Us
        </a>
      </div>
    </>
  );
}

export default NavBar;
