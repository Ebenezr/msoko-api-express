import React from "react";

const HomePage = () => {
  return (
    <section className="flex h-full flex-1 flex-col">
      {/* card */}
      <div className="flex flex-col gap-2 py-4">
        <p>What do you want to add to your cart?</p>
        <input
          type="search"
          className="rounded-md py-2 px-3"
          placeholder="Search product"
        />
      </div>
      {/* banner */}
      <div className="my-4 h-28 w-full rounded-md bg-primary/75"></div>
      {/* category */}
      <div className="flex-1">
        <p className="mb-6 font-semibold">Category</p>
        {/* wrapper */}
        <div>
          {/* card */}
          <div className="group">
            {/* image */}
            <div className="h-16 w-20 rounded-md bg-white group-hover:border-2 group-hover:border-primary group-hover:shadow-md group-focus:border-2 group-focus:border-primary group-focus:shadow-md"></div>
            <small className="group-hover:text-primary group-focus:text-primary">
              Vegetable Oil
            </small>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-4 font-semibold">Products</p>
        <div className="h-52 w-full rounded-lg bg-white shadow-md"></div>
      </div>
    </section>
  );
};

export default HomePage;
