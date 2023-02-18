import { useState } from "react";

function SubscriptionForm({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, firstName, lastName });
  };

  return (
    <div className="w-[100%] py-20 bg-gray-200 ">
      <div className="container flex flex-col w-[100%]  gap-10 mx-auto">
        <h2 className="text-3xl font-bold text-center text-sky-500">
          SUBSCRIBE TO OUR BLOG
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-10">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="px-5 py-3 text-lg text-gray-600 focus:outline-none "
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="px-5 py-3 text-lg text-gray-600 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 text-lg text-gray-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="px-16 py-3 text-lg text-white bg-sky-500 hover:bg-sky-400"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscriptionForm;
