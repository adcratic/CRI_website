import { SimpleGrid } from "@chakra-ui/react";
import GridCard from "../grid-card/grid-card";

function CategoryGrid() {
  const sampleContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur alias quia laborum nesciunt illum molestiae fugit quae doloremque nostrum modi similique aliquid omnis cum quod earum dignissimos, harum corrupti labore!";
  return (
    <div className="w-screen bg-sky-100">
      <div className="container px-5 py-10 mx-auto md:px-48">
        <h2 className="py-10 text-3xl font-bold text-center text-sky-500">
          PRODUCT CATEGORIES
        </h2>
        <SimpleGrid columns={[1, 1, 1, 1, 3]} spacing={10}>
          <GridCard
            src="/pump.jpg"
            alt="pump"
            title="PUMPS"
            content={sampleContent}
            link="#"
          />
          <GridCard
            src="/pump.jpg"
            alt="pump"
            title="PUMPS"
            content={sampleContent}
            link="#"
          />
          <GridCard
            src="/pump.jpg"
            alt="pump"
            title="PUMPS"
            content={sampleContent}
            link="#"
          />
          <GridCard
            src="/pump.jpg"
            alt="pump"
            title="PUMPS"
            content={sampleContent}
            link="#"
          />
          <GridCard
            src="/pump.jpg"
            alt="pump"
            title="PUMPS"
            content={sampleContent}
            link="#"
          />
          <GridCard
            src="/pump.jpg"
            alt="pump"
            title="PUMPS"
            content={sampleContent}
            link="#"
          />
        </SimpleGrid>
      </div>
    </div>
  );
}
export default CategoryGrid;
