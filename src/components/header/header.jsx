import { useState, useEffect } from "react";
import useWindowSize from "hooks/useWindowSize";
import Carousel from "../carousel/carousel";

const slides = [
  {
    src: "/homepage-slide.jpg",
    alt: "homepage-slide",
    title: "",
    content: "",
  },
  {
    src: "/homepage-slide.jpg",
    alt: "homepage-slide",
    title: "",
    content: "",
  },
  {
    src: "/homepage-slide.jpg",
    alt: "homepage-slide",
    title: "",
    content: "",
  },
  {
    src: "/homepage-slide.jpg",
    alt: "homepage-slide",
    title: "",
    content: "",
  },
];
export default function Header() {
  const { size } = useWindowSize();
  const { height, setHeight } = useState("80vh");
  useEffect(() => {
    if (size && size.width < 768) {
      console.log("smaller than 768px");
      setHeight("50vh");
    }
  }, [size]);
  return (
    <header className="w-screen mx-auto">
      <Carousel
        slides={slides}
        height="80vh"
        slideWidth="100vw"
        slidesPerView={1}
      />
    </header>
  );
}
