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
function Footer() {
  return (
    <div className="w-[100%] py-20 bg-sky-500 text-white text-xl font-[600]">
      <div className="container flex flex-col items-start justify-start gap-10 px-5 mx-auto md:px-10 lg:px-20 ">
        <h1 className="text-4xl font-bold text-left ">CONTACT US</h1>
        <div className="flex justify-between gap-20 h-[50vh]">
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
            <div className="flex justify-between">
              <div className="flex flex-col gap-5">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
              </div>
              <div className="flex flex-col gap-5">
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Products</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
