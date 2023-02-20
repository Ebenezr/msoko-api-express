"use client";
import { Inter } from "@next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <section className="bg-bg w-screen h-screen grid place-items-center text-center">
      <div className="flex flex-col gap-3">
        {/* logo */}
        <div className="grid place-items-center">
          <Image
            className="w-auto"
            src="/logo.png"
            alt="kapa"
            width={150}
            height={80}
          />
        </div>

        <h1 className="font-semibold text-gray-900 text-2xl">
          What`s your email address?
        </h1>
        <p className="text-xs mb-10 text-gray-500 tracking-wide">
          Type your email to log in or create a Kapa account
        </p>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            placeholder="Email"
            className="px-4 rounded border-slate-400 py-2 text-gray-700 ring-0 ring-offset-0"
          />
          <button className="w-full bg-primary font-semibold py-2 px-4 rounded text-white">
            Continue
          </button>
          <button
            className="mt-3 font-semibold text-primary tracking-wide mt-4"
            onClick={() => {
              router.push("/homepage");
            }}
          >
            Log or register with phone number
          </button>
        </form>
        <button className="mt-8 font-semibold">Log in with Google</button>
      </div>
      <div>
        <p className="text-xs text-gray-500 tracking-wide">
          For further support, you may visit the Help Center or contact our
          customer services team,
        </p>
      </div>
    </section>
  );
}
