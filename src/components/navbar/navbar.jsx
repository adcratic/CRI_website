import Topbar from "./topbar";
import styles from "./navbar.module.css";
import useWindowSize from "hooks/useWindowSize";

export default function Navbar() {
  const size = useWindowSize();

  return (
    <nav className={styles.nav}>
      <Topbar />
      <div className="container flex items-center justify-between px-10 mx-auto md:px-3 lg:px-20 xl:56">
        <div className="py-2 lg:py-5">
          <img src="/cri-logo.gif" alt="C.R.I. PUMPS"></img>
        </div>
        {size.width > 767 && (
          <div className="flex flex-wrap my-1 lg:flex-nowrap">
            <span>
              <a
                href="#"
                className={`${styles.active} lg:px-6 md:px-3 px-1 transition lg:py-5 py-2 text-lg hover:bg-sky-400 hover:text-white`}
              >
                HOME
              </a>
            </span>
            <span>
              <a
                href="#"
                className="px-1 py-2 text-lg transition lg:py-5 md:px-3 lg:px-6 hover:bg-sky-400 hover:text-white"
              >
                ABOUT
              </a>
            </span>

            <span>
              <a
                href="#"
                className="px-1 py-2 text-lg transition lg:py-5 md:px-3 lg:px-6 hover:bg-sky-400 hover:text-white"
              >
                APPLICATIONS
              </a>
            </span>
            <span>
              <a
                href="#"
                className="px-1 py-2 text-lg transition lg:py-5 md:px-3 lg:px-6 hover:bg-sky-400 hover:text-white"
              >
                PRODUCTS
              </a>
            </span>

            <span>
              <a
                href="#"
                className="px-1 py-2 text-lg transition lg:py-5 md:px-3 lg:px-6 hover:bg-sky-400 hover:text-white"
              >
                SUPPORT
              </a>
            </span>

            <span>
              <a
                href="#"
                className="px-1 py-2 text-lg transition lg:py-5 md:px-3 lg:px-6 hover:bg-sky-400 hover:text-white"
              >
                MEDIA
              </a>
            </span>

            <span>
              <a
                href="#"
                className="px-1 py-2 transition text-md lg:text-lg lg:py-5 md:px-3 lg:px-6 hover:bg-sky-400 hover:text-white"
              >
                CONTACT US
              </a>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
