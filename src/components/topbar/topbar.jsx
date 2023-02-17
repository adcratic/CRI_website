import { SearchIcon } from "@chakra-ui/icons";

export default function Topbar() {
  return (
    <div className="w-screen py-2 text-xl font-semibold text-white bg-sky-400">
      <div className="container flex justify-between px-5 mx-auto md:px-10 lg:px-20 xl:56">
        <div className="flex">
          Toll Free : <a href="tel:+91">+91 9999 999 999</a>
        </div>
        <div className="flex">
          <a href="">
            <SearchIcon />
          </a>{" "}
          &nbsp;| &nbsp;
          <a href="">LINK</a>
          &nbsp;|&nbsp;
          <a href="">LINK</a>
          &nbsp;|&nbsp;
          <a href="">LINK</a>
          &nbsp;|&nbsp;
          <a href="">LINK</a>
          &nbsp;|&nbsp;
          <a href="">LINK</a>
        </div>
      </div>
    </div>
  );
}
