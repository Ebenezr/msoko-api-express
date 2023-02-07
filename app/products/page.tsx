"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Rating from "@material-ui/lab/Rating";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
const useStyles = makeStyles({
  icon: {
    height: "24px",
  },
});

const product = {
  name: "Noodle",
  rating: 4,
  reviews: 14,
  price: 55.0,
  size: "500G",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi Lorem ipsum dolor sit amet consectetur adipisicing elit.Vel, recusandae ad praesentium quod culpa nemo",
};

export default function () {
  const [isReadMore, setIsReadMore] = useState(true);
  const classes = useStyles();
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const KES = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  });

  // Format the price above to USD using the locale, style, and currency.

  return (
    <section className=" flex flex-1 flex-col px-6">
      {/* header */}
      <nav className="my-2 flex justify-between">
        <Link href="/" className="align-center flex gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <p className="font-semibold text-primary">Back</p>
        </Link>

        {/* favorite */}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6 text-primary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </span>
      </nav>
      {/* product image */}
      {/* wrapper */}

      <div className="mt-4">
        <Carousel
          // autoPlay={true}
          centerMode={false}
          emulateTouch={true}
          infiniteLoop={true}
          stopOnHover={true}
          centerSlidePercentage={100}
          interval={5000}
          transitionTime={1000}
          showStatus={false}
          showArrows={false}
          useKeyboardArrows={true}
          className=" mx-auto flex h-48 w-2/3 flex-col"
        >
          {/* product images */}
          <div className=" h-44 w-full bg-green-500"></div>
          <div className=" h-44 w-full bg-green-200"></div>
        </Carousel>
      </div>
      {/* prod feat */}
      <div className="flex w-full flex-1 flex-col ">
        <p className="text-lg font-bold">Noodle</p>
        <div className="mt-3 flex items-center gap-2">
          <p className="">4.0</p>
          {/* star rating */}
          <span className="flex">
            <Rating
              name="read-only"
              value={product.rating}
              precision={0.5}
              readOnly
              icon={
                <span className={classes.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                </span>
              }
            />
          </span>
          <small className="text-neutral-400">
            ({product.reviews} reviews)
          </small>
        </div>

        <p className="mt-2">Size: {product.size}</p>
        <p className="mt-3 text-lg font-bold text-primary">
          {KES.format(product.price)}
        </p>
        <p className="mt-4 text-lg font-semibold">Descriptions</p>
        <p className="mt-3 leading-5 text-neutral-700">
          {isReadMore ? product.desc.slice(0, 150) : product.desc}
          <button
            onClick={toggleReadMore}
            className="flex w-full cursor-pointer justify-center gap-2 py-4  text-[16px] font-medium leading-4 tracking-wide text-primary "
          >
            {isReadMore ? (
              <>
                Show more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-6 w-6 text-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </>
            ) : (
              <>
                Show less
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-primary"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 15.75l7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              </>
            )}
          </button>
        </p>
      </div>
      {/* buttons */}
      <div className="grid w-full grid-cols-2 gap-3 py-8">
        <Button variant="outlined" startIcon={<AddShoppingCartIcon />}>
          Add to cart
        </Button>
        <Button
          color="primary"
          variant="contained"
          style={{ backgroundColor: "#010F8C", color: "#fff" }}
        >
          <Link href="/cart">Buy Now</Link>
        </Button>
      </div>
    </section>
  );
}
