"use client";
import { ProductInventory } from "@/server/models/productInventory.model";
import { CreateProductCategoryInput } from "@/server/schemas/product.schema";
import { ProductCategory } from "@/type";
import React, { useState } from "react";
import useCustomQuery from "../../pages/queries/getQuery";

const HomePage = () => {
  const { isLoading, data, error } = useCustomQuery(
    "http://localhost:5000/api/categories"
  );

  if (isLoading) {
    console.log("loading");
  }
  if (error) {
    console.log("error");
  }

  return (
    <section className="flex h-full w-full flex-1 flex-col px-4">
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
      <div className="my-4 h-28 w-full  rounded-md bg-primary/75"></div>
      <div className="w-full bg-green-200 overflow-hidden">
        {/* category */}

        <div className="flex-1 w-full ">
          <p className="mb-6 font-semibold">Category</p>
          {/* wrapper */}
          <div>
            <div className=" w-full bg-green-100">
              <div className="flex overflow-x-auto gap-3 px-3 ">
                {/* card */}
                {isLoading ? (
                  <div>Fetching</div>
                ) : data instanceof Array ? (
                  data?.map((prod: ProductCategory) => (
                    <div key={prod.id} className=" group">
                      {/* image */}
                      <div className="h-16 min-w-max flex-shrink-0 rounded-md bg-white group-hover:border-2 group-hover:border-primary group-hover:shadow-md group-focus:border-2 group-focus:border-primary group-focus:shadow-md"></div>
                      <small className="font-semibold group-hover:text-primary text-xs group-focus:text-primary">
                        {prod.name}
                      </small>
                    </div>
                  ))
                ) : null}
              </div>
            </div>
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
