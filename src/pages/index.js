import CategoryGrid from "@/components/category/category-grid";
import CategoryList from "@/components/category/category-list";
import EmbedVideo from "@/components/embed-video/embed-video";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";
import { Inter } from "@next/font/google";
import useWindowSize from "hooks/useWindowSize";
import Accomplishments from "@/components/accomplishments/accomplishments";
import LatestProducts from "@/components/latest-products/latest-products";
import News from "@/components/news/news";
import SubscriptionForm from "@/components/subscription-form/subscription-form";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { width, height } = useWindowSize();

  const subscribtionFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Navbar />
      <Header />
      <CategoryList />
      <CategoryGrid />
      <EmbedVideo>
        <iframe
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed/jfEMwJtXJu4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </EmbedVideo>
      <LatestProducts />
      <Accomplishments />
      <News />
      <SubscriptionForm onSubmit={subscribtionFormSubmit} />
      <Footer />
    </>
  );
}
