"use client";

import LoadingButton from "@mui/lab/LoadingButton";
import { useState } from "react";
import Link from "next/link";

const currencies = [
  {
    value: "G4S",
    label: "G4S",
  },
  {
    value: "4NK",
    label: "4NK",
  },
  {
    value: "Door Dash",
    label: "Door Dash",
  },
];

export default function () {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!loading);
  }
  return (
    <section className="flex flex-1 flex-col px-6">
      {/* header */}
      <nav className="my-2 flex justify-between">
        <Link href="/order" className="align-center flex gap-2 ">
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

      <LoadingButton
        className="rounded-full"
        style={{ backgroundColor: "#010F8C", color: "#fff" }}
        loading={loading}
        loadingPosition="start"
        variant="contained"
        onClick={handleClick}
      >
        New Order
      </LoadingButton>
    </section>
  );
}
