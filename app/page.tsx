import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

async function getUsers() {
  const res = await fetch(`${process.env.BASE_URL}/api/getUsers`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}
export default async function Home() {
  const data = await getUsers();
  console.log(data);
  return <main className=""></main>;
}
