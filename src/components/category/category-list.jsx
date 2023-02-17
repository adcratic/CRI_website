function ListItem({ href, text }) {
  return (
    <a
      className="text-lg text-gray-600 hover:underline hover:text-red-700 "
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
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-5">
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
        <ListItem href="#" text="CATEGORY SOMETHING" />
      </div>
    </div>
  );
}

export default CategoryList;
