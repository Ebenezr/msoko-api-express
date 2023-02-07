"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("/");
  const [list, setList] = useState([]);
  const items = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Products",
      url: "/products",
    },
    {
      name: "Cart",
      url: "/cart",
    },
    {
      name: "Payment",
      url: "/payment",
    },
    {
      name: "order",
      url: "/order",
    },
  ];

  return (
    <header className="  h-24 w-full ">
      <div className="align-center relative mx-auto flex h-full w-full justify-center">
        {currentRoute == "/" && (
          <button className="absolute left-4 top-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-7 text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        )}
        <Image
          src="/logo.png"
          alt="kapa"
          width={150}
          height={80}

          // placeholder="blur" // placeholder="empty"
        />
      </div>
    </header>
  );
};

export default Header;
