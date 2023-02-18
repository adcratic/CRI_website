import { ChatIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { Divider } from "@chakra-ui/react";
function Footer() {
  return (
    <div className="w-[100%]  bg-sky-500 text-white text-xl  relative">
      <div className="container flex flex-col items-start justify-start gap-10 px-5 py-16 mx-auto md:px-10 ">
        <h1 className="text-4xl font-bold text-left ">CONTACT US</h1>
        <div className="flex justify-between  gap-10 min-h-[50vh] flex-col lg:flex-row w-[100%]">
          {/*---------------------Div 1---------------*/}
          <div className="flex flex-col gap-5">
            <h2 className="py-5 text-3xl font-bold ">
              C.R.I. Pumps Private Limited
            </h2>
            <p className="py-1 ">7/46-1, Keeranatham Road, Saravanampatti</p>
            <p className="py-1">Coimbatore - 641 035. Tamilnadu, India.</p>
            <div>
              <div>
                <EmailIcon /> Email : <a href="mailto:">corp@cripumps.com</a>
              </div>
              <div>
                <PhoneIcon /> Phone : <a href="tel:+91">+91 9999 999 999</a>
              </div>
              <div>
                <ChatIcon /> Chatbot : <a href="sms:+91">+91 9999 999 999</a>
              </div>
            </div>
            <div>
              <h2 className="py-5 text-3xl font-bold">FOLLOW US</h2>
              <div className="flex items-center justify-start gap-5 text-5xl">
                <span className="">
                  <AiFillFacebook />
                </span>
                <span>
                  <AiFillTwitterCircle />
                </span>
                <span>
                  <AiFillLinkedin />
                </span>
                <span>
                  <FiYoutube />
                </span>
                <span>
                  <FiInstagram />
                </span>
              </div>
            </div>
          </div>
          {/*---------------------Div 2---------------*/}
          <div>
            <h2 className="py-5 text-3xl font-bold ">USEFUL LINKS</h2>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex flex-col gap-3 px-3">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="flex flex-col gap-3 px-3">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
          {/*---------------------Div 3---------------*/}
          <div>
            <h2 className="py-5 text-3xl font-bold ">APPLICATIONS </h2>
            <div className="flex flex-col justify-between sm:flex-row">
              <div className="flex flex-col gap-3 px-3">
                <a href="#">Agriculture</a>
                <a href="#">Residential</a>
                <a href="#">Commercial Buildings</a>
                <a href="#">Pressure Boosting</a>
                <a href="#">Dewatering</a>
                <a href="#">HVAC</a>
                <a href="#">Boiler Feed</a>
                <a href="#">Borewell Submersible Pumps</a>
              </div>
              <div className="flex flex-col gap-3 px-3">
                <a href="#">Flood Control</a>
                <a href="#">Fire Fighting</a>
                <a href="#">Water Treatment</a>
                <a href="#">Lift/Drift Irrigation</a>
                <a href="#">Industry</a>
                <a href="#">Water Supply</a>
                <a href="#">Modern Irrigation</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-0" />
      <div className="h-[60px] flex items-center">
        <div className="container px-10 mx-auto">
          2023 C.R.I. Pumps Private Limited ©All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
