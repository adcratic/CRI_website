import Carousel from "../carousel/carousel";

//review

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
function News() {
  return (
    <div className="container px-5 py-16 mx-auto md:px-40 lg:px-40">
      <h1 className="py-16 text-3xl font-bold text-center text-sky-500">
        NEWS & EVENTS
      </h1>
      <Carousel slideWidth="700px" slides={slides} height="400px" />
    </div>
  );
}

export default News;
