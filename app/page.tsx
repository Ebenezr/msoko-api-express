import useCustomQuery from "@/pages/queries/getQuery";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

// async function getUsers() {
//   const res = await fetch(`${process.env.BASE_URL}/api/getUsers`);
//   if (!res.ok) {
//     console.log("🚀 ~ file: page.tsx:8 ~ getUsers ~ res", res);
//   }
//   return res.json();
// }
async function getProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getProducts`);
  if (!res.ok) {
    console.log("🚀 ~ file: page.tsx:8 ~ getUsers ~ res", res);
  }
  return res.json();
}

export default async function Home() {
  // const data = await getUsers();
  const data1 = await getProducts();
  console.log("🚀 ~ file: page.tsx:23 ~ Home ~ data1", data1);
  // console.log(data);
  return (
    <p>
      home
      {/* {data1.map((item: any) => (
        <div key={item.id} className="">
          {item.name}
          {item.products.map((it: any) => (
            <div key={it.id}>
              {it.name}
              {it.review.map((it: any) => (
                <div key={it.id}>{it.description}</div>
              ))}
            </div>
          ))}
        </div>
      ))} */}
    </p>
  );
}
