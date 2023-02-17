import Topbar from "../topbar/topbar";

export default function Navbar() {
  return (
    <nav>
      <Topbar />
      <div className="container flex items-center justify-between px-5 mx-auto md:px-10 lg:px-20 xl:56">
        <div className="py-3">
          <img src="/cri-logo.gif" alt="C.R.I. PUMPS"></img>
        </div>
        <div className="flex">
          <a
            href=""
            className="px-4 py-3 font-lg hover:bg-sky-400 hover:text-white"
          >
            LINK
          </a>{" "}
          &nbsp;
          <a
            href=""
            className="px-4 py-3 font-lg hover:bg-sky-400 hover:text-white"
          >
            LINK
          </a>{" "}
          &nbsp;
          <a
            href=""
            className="px-4 py-3 font-lg hover:bg-sky-400 hover:text-white"
          >
            LINK
          </a>{" "}
          &nbsp;
          <a
            href=""
            className="px-4 py-3 font-lg hover:bg-sky-400 hover:text-white"
          >
            LINK
          </a>{" "}
          &nbsp;
          <a
            href=""
            className="px-4 py-3 font-lg hover:bg-sky-400 hover:text-white"
          >
            LINK
          </a>{" "}
          &nbsp;
        </div>
      </div>
    </nav>
  );
}
