import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useRef } from "react";

// import Swiper core and required modules
import SwiperCore, {
  Autoplay,
  Loop,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slide({ src, title, content, height, width }) {
  SwiperCore.use([Autoplay, Loop, Navigation, Pagination, Scrollbar, A11y]);

  var style = { height: height, width: width };

  if (title === undefined) title = "";
  if (content === undefined) content = "";
  if (title !== "" || content !== "") {
    style = {
      ...style,
      backgroundImage: `url(${src})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "white",
      backgroundSize: "cover",
    };
  }

  const headFont =
    content === "" ? (width < 700 ? "xl" : "2xl") : width < 700 ? "lg" : "4xl";
  const contentFont = width < 700 ? "sm" : "md";

  return (
    <div className="relative mx-auto" style={style}>
      {title !== "" || content !== "" ? (
        <div className="text-center  absolute w-[100%] h-[100%]  top-0 left-0 flex flex-col justify-end align-bottom pb-[5%] bg-black bg-opacity-40 text-white">
          <h2 className={`text-${headFont} font-bold`}>{title}</h2>
          <p className={`"text-${contentFont}"`}>{content}</p>
        </div>
      ) : (
        <img src={src} alt="slide" className="w-[100%] h-[100%] object-cover" />
      )}
    </div>
  );
}

function NavigationBtn({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        direction === "next" ? "right-0" : "left-0"
      } absolute top-1/2 md:mx-10 transform -translate-y-1/2 z-10 bg-gray-100 opacity-70 rounded-full p-3`}
    >
      {direction === "next" ? (
        <ChevronRightIcon className="w-6 h-6 text-4xl" />
      ) : (
        <ChevronLeftIcon className="w-6 h-6 text-4xl" />
      )}
    </button>
  );
}

/*------------------------------------ Main Carousel Component -------------------------------*/

function Carousel({ slides, height, slideWidth, slidesPerView }) {
  const swiperRef = useRef();
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={slidesPerView}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
      centeredSlides
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="relative overflow-hidden max-w-[100%]"
    >
      {slides
        ? slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <Slide
                src={slide.src}
                alt={slide.alt}
                title={slide.title}
                content={slide.content}
                height={height}
                width={slideWidth}
              />
            </SwiperSlide>
          ))
        : null}
      <NavigationBtn
        direction={"prev"}
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <NavigationBtn
        direction={"next"}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </Swiper>
  );
}

export default Carousel;
