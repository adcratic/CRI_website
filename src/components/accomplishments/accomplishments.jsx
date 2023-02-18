import { SimpleGrid } from "@chakra-ui/react";
import useWindowSize from "hooks/useWindowSize";

function Accomplishments() {
  const size = useWindowSize();
  return (
    <div className="flex flex-wrap gap-0 text-white bg-gray-800 xl:flex-nowrap">
      {size.width > 768 && (
        <div className="overflow-hidden flex-4 ">
          <img
            src="/interior.jpg"
            alt="CRI"
            className="transition hover:scale-125 opacity-70"
          />
        </div>
      )}
      <section className="flex flex-col gap-10 px-16 py-16 flex-3">
        <h2 className="text-3xl font-bold ">WHY C.R.I.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo
          provident nemo esse, et aliquam facilis placeat cupiditate quisquam
          sunt repudiandae mollitia exercitationem doloribus, in ex veritatis
          quaerat expedita hic assumenda nesciunt ducimus similique! Cupiditate
          at neque iste culpa error et commodi assumenda, reprehenderit
          consequatur ut, accusamus, minus debitis doloribus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsa
          error distinctio vero maiores voluptatem excepturi cum, perspiciatis
          tempore mollitia. Dolores, qui aliquam. Tempora distinctio
          voluptatibus a dolor voluptatem similique.
        </p>
        <SimpleGrid columns={[1, 2, 2]} spacing={10}>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-7xl">21 +</h3>
            <p>Global manufacturing facilities</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-7xl">21 +</h3>
            <p>Global manufacturing facilities</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-7xl">21 +</h3>
            <p>Global manufacturing facilities</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-7xl">21 +</h3>
            <p>Global manufacturing facilities</p>
          </div>
        </SimpleGrid>
      </section>
    </div>
  );
}

export default Accomplishments;
