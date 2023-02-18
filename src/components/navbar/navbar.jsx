import Topbar from "./topbar";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Topbar />
      <div className="container flex items-center justify-between mx-auto md:px-10 lg:px-20 xl:56">
        <div className="py-5">
          <img src="/cri-logo.gif" alt="C.R.I. PUMPS"></img>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap">
          <span>
            <a
              href="#"
              className={`${styles.active} px-6 transition py-5 text-lg hover:bg-sky-400 hover:text-white`}
            >
              HOME
            </a>
          </span>
          <span>
            <a
              href="#"
              className="px-6 py-5 text-lg transition hover:bg-sky-400 hover:text-white"
            >
              ABOUT
            </a>
          </span>

          <span>
            <a
              href="#"
              className="px-6 py-5 text-lg transition hover:bg-sky-400 hover:text-white"
            >
              APPLICATIONS
            </a>
          </span>
          <span>
            <a
              href="#"
              className="px-6 py-5 text-lg transition hover:bg-sky-400 hover:text-white"
            >
              PRODUCTS
            </a>
          </span>

          <span>
            <a
              href="#"
              className="px-6 py-5 text-lg transition hover:bg-sky-400 hover:text-white"
            >
              SUPPORT
            </a>
          </span>

          <span>
            <a
              href="#"
              className="px-6 py-5 text-lg transition hover:bg-sky-400 hover:text-white"
            >
              MEDIA
            </a>
          </span>

          <span>
            <a
              href="#"
              className="px-6 py-5 text-lg transition hover:bg-sky-400 hover:text-white"
            >
              CONTACT US
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
}
