import { SearchIcon } from "@chakra-ui/icons";
import { FiGlobe } from "react-icons/fi";
export default function Topbar() {
  return (
    <div className="w-screen py-2 text-xl font-semibold text-white bg-sky-400">
      <div className="container flex flex-wrap justify-between px-5 mx-auto md:flex-nowrap md:px-10 lg:px-20 xl:56">
        <div className="flex">
          Toll Free : <a href="tel:+91">+91 9999 999 999</a>
        </div>
        <div className="flex flex-wrap md:flex-nowrap">
          <a href="#">
            <SearchIcon />
          </a>{" "}
          &nbsp;|&nbsp;
          <a href="#" className="flex items-center justify-center">
            {" "}
            <FiGlobe />
          </a>
          &nbsp;| &nbsp;
          <a href="#">PUMP SELECTOR</a>
          &nbsp;|&nbsp;
          <a href="#">DEALER LOGIN</a>
          &nbsp;|&nbsp;
          <a href="#">E-SHOP</a>
          &nbsp;|&nbsp;
          <a href="#">BP-CONNECT</a>
        </div>
      </div>
    </div>
  );
}
