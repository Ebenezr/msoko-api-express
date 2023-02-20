"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full h-full flex flex-col space-y-4 text-center">
      <h2 className="text-gray-700">No connection</h2>
      {/* icon wifi */}
      <p className="text-slate-500 text-xs">
        An internet error occurred, please try again{" "}
      </p>

      <button
        className="w-full bg-slate-400 text-gray-700 font-semibold py-2 px-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
