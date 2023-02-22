"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import useCustomQuery from "../../pages/queries/getQuery";
import styles from "../Page.module.css";
import Head from "next/head";
import useCustomShowQuery from "@/pages/queries/getOneQuery";
import useStore from "../../store/useStore";
import { Product, productCategory } from "@/type";

const KES = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "KES",
});

const HomePage = () => {
  const router = useRouter();
  const [cartId, setCatId] = useState<number>(1);

  const setCurrentProduct = useStore((state) => state.setCurrentProduct);

  const {
    data: catProd,
    fetchData,
    isLoading: prodLoading,
  } = useCustomShowQuery("http://localhost:5000/api/category", cartId);

  // call fetchData when cartId changes
  useEffect(() => {
    fetchData();
  }, [cartId, fetchData]);

  const {
    isLoading: catLoading,
    data: categories,
    error,
  } = useCustomQuery("http://localhost:5000/api/categories");

  // async function getUsers() {
  //   const res = await fetch(`${process.env.BASE_URL}/api/getUsers`);
  //   if (!res.ok) {
  //     console.log("🚀 ~ file: page.tsx:8 ~ getUsers ~ res", res);
  //   }
  //   return res.json();
  // }

  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <section className="flex h-full w-screen flex-1 flex-col px-4">
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
        <div className="my-4 px-4 h-28 w-full grid grid-cols-2 text-white align-center rounded-md bg-primary/75">
          {/* image */}
          <div></div>
          {/* content */}
          <div className=" text-center flex flex-col align-center justify-center">
            <p className="font-semibold">Exclusive Offer!</p>
            <p className="whitespace-nowrap">Get 30% off this January</p>
            <p className="font-semibold">Order Now</p>
          </div>
        </div>
        <div className=" overflow-hidden my-4 ">
          {/* category */}

          <div className="flex-1  ">
            <p className="mb-6 font-semibold">Category</p>
            {/* wrapper */}
            <div>
              <div
                className={`${styles.no_scrollbar} flex overflow-x-scroll hide-scroll-bar `}
              >
                <div className="flex flex-nowrap">
                  {/* card */}
                  {catLoading ? (
                    // fetch animation
                    <div className="flex">
                      <div className=" group inline-block ">
                        <div className="shrink-0 px-3 flex flex-col justify-center gap-2 ">
                          <div className="animate-pulse w-28 h-16 w-full rounded-md bg-slate-300 group-hover:border-2 group-hover:border-primary group-hover:shadow-md group-focus:border-2 group-focus:border-primary group-focus:shadow-md"></div>
                          <div className="animate-pulse bg-slate-300 w-full h-4 rounded-full"></div>
                        </div>
                      </div>
                      <div className=" group inline-block ">
                        <div className="shrink-0 px-3 flex flex-col justify-center gap-2 ">
                          <div className="animate-pulse w-28 h-16 w-full rounded-md bg-slate-300 group-hover:border-2 group-hover:border-primary group-hover:shadow-md group-focus:border-2 group-focus:border-primary group-focus:shadow-md"></div>
                          <div className="animate-pulse bg-slate-300 w-full h-4 rounded-full"></div>
                        </div>
                      </div>
                      <div className=" group inline-block ">
                        <div className="shrink-0 px-3 flex flex-col justify-center gap-2 ">
                          <div className="animate-pulse w-28 h-16 w-full rounded-md bg-slate-300 group-hover:border-2 group-hover:border-primary group-hover:shadow-md group-focus:border-2 group-focus:border-primary group-focus:shadow-md"></div>
                          <div className="animate-pulse bg-slate-300 w-full h-4 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ) : categories instanceof Array ? (
                    categories?.map((prod: productCategory) => (
                      <div key={prod.id} className=" group inline-block">
                        {/* make skeleton of this */}
                        <div className="shrink-0 px-3 flex flex-col justify-center gap-2 ">
                          {/* image */}

                          <div
                            className="w-28 h-16 w-full rounded-md bg-white group-hover:border-2 group-hover:border-primary group-hover:shadow-md group-focus:border-2 group-focus:border-primary group-focus:shadow-md"
                            onClick={() => {
                              setCatId(prod.id);
                              fetchData();
                            }}
                          ></div>
                          <p className="text-center font-semibold grow-0 group-hover:text-primary text-xs whitespace-nowrap group-focus:text-primary">
                            {prod.name}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6 mt-4">
          <p className="mb-6 font-semibold">Products</p>
          <div className="h-64 w-full rounded-lg bg-white shadow-md flex align-center">
            <div
              className={`${styles.no_scrollbar} flex overflow-x-scroll hide-scroll-bar w-full `}
            >
              <div className="flex flex-nowrap w-full p-4">
                {prodLoading ? (
                  <div className="flex">
                    <div className="px-3 shrink-0 inline-block text-left w-28 flex flex-col cursor-pointer space-y-2 ">
                      <div className="w-full h-20 shrink-0 bg-slate-300 "></div>
                      <div className="animate-pulse bg-slate-300 w-full h-4 rounded-full"></div>
                      <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-full"></div>
                      <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-full"></div>
                    </div>
                    <div className="px-3 shrink-0 inline-block text-left w-28 flex flex-col cursor-pointer space-y-2 ">
                      <div className="w-full h-20 shrink-0 bg-slate-300 "></div>
                      <div className="animate-pulse bg-slate-300 w-full h-4 rounded-full"></div>
                      <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-full"></div>
                      <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-full"></div>
                    </div>
                    <div className="px-3 shrink-0 inline-block text-left w-28 flex flex-col cursor-pointer space-y-2 ">
                      <div className="w-full h-20 shrink-0 bg-slate-300 "></div>
                      <div className="animate-pulse bg-slate-300 w-full h-4 rounded-full"></div>
                      <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-full"></div>
                      <div className="animate-pulse bg-slate-300 w-2/3 h-4 rounded-full"></div>
                    </div>
                  </div>
                ) : catProd instanceof Array ? (
                  catProd?.map((prod: Product) => (
                    <div
                      key={prod.id}
                      className="px-3 shrink-0 inline-block text-left w-28 flex flex-col cursor-pointer"
                      onClick={() => {
                        setCurrentProduct(prod);
                        router.push("/products");
                      }}
                    >
                      {/* image */}
                      <div className="w-full h-20 shrink-0 bg-primary/50 "></div>
                      <p className="flex-1 font-semibold mt-2 text-xs">
                        {prod.name}
                      </p>
                      <p className="text-xs flex-1 text-neutral-400 mt-2">
                        {prod.size}
                      </p>
                      <p className="font-semibold text-xs text-primary mt-2 flex-1">
                        {KES.format(prod.price)}
                      </p>
                    </div>
                  ))
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
