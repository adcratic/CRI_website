function ListItem({ href, text }) {
  return (
    <a
      className="text-xl text-gray-600 hover:underline hover:text-red-700 "
      href={href}
    >
      {text}
    </a>
  );
}
function CategoryList() {
  return (
    <div className="container flex flex-col items-center justify-center py-16 mx-auto md:px-44">
      <h2 className="px-3 py-10 text-3xl font-bold text-center text-sky-500 ">
        WHAT ARE YOU LOOKING FOR?
      </h2>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 ">
        <ListItem href="#" text="WASTE WATER PUMPS" />
        <ListItem href="#" text="AGRICULTURE PUMPS" />
        <ListItem href="#" text="SWIMMING POOL PUMPS" />
        <ListItem href="#" text="SOLAR PUMPS" />
        <ListItem href="#" text="BOREWELL SUBMERSIBLE PUMPS" />
        <ListItem href="#" text="OPEN SUBMERSIBLE PUMPS" />
        <ListItem href="#" text="BUTTERFLY VALVE" />
        <ListItem href="#" text="STARTERS AND PANELS" />
        <ListItem href="#" text="AIR VALVE" />
        <ListItem href="#" text="HVAC SYSTEMS" />
        <ListItem href="#" text="PIPES" />
        <ListItem href="#" text="HOUSING WIRES" />
      </div>
    </div>
  );
}

export default CategoryList;
