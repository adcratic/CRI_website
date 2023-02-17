import useWindowSize from "hooks/useWindowSize";
import Carousel from "../carousel/carousel";
const slides = [
  {
    src: "/pump.jpg",
    alt: "pump",
    title: "",
    content: "",
  },
  {
    src: "/pump.jpg",
    alt: "pump",
    title: "",
    content: "",
  },
];

function LatestProducts() {
  const { width, height } = useWindowSize();

  return (
    <div className="px-10 py-20 bg-sky-50">
      <div className="container flex flex-col gap-10 mx-auto">
        <h2 className="text-3xl font-bold text-sky-500">LATEST PRODUCTS</h2>
        <p className="leading-7 text-gray-600 text-md">
          {" "}
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend
        </p>
        <p className="text-lg text-gray-600">
          <a href="" className="text-sky-500">
            Contact us
          </a>{" "}
          for knowing more about our latest special application pumps.
        </p>
        <Carousel
          slides={slides}
          height="300px"
          slideWidth="300px"
          slidesPerView={width < 1024 ? 1 : width < 1280 ? 2 : 3}
        />
      </div>
    </div>
  );
}

export default LatestProducts;
