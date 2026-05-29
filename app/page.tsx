import { supabase } from "@/lib/supabase";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const { data: products, error } = await supabase.from("products").select("*");

  if (error) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Mini Shop 🛍</h1>

      <div className="grid grid-cols-3 gap-6">
        {products?.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

// import { supabase } from "@/lib/supabase";
// import ProductCard from "@/components/ProductCard";

// export default async function Home() {
//   const { data: products, error } = await supabase.from("products").select("*");

//   if (error) {
//     return <div>Error loading products</div>;
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Mini Shop 🛍</h1>

//       <div className="grid grid-cols-3 gap-6">
//         {products?.map((p) => (
//           <ProductCard key={p.id} product={p} />
//         ))}
//       </div>
//     </div>
//   );
// }

// // import { supabase } from "@/lib/supabase";

// // export default async function Home() {
// //   const { data: products, error } = await supabase.from("products").select("*");

// //   if (error) {
// //     return <div>Error loading products</div>;
// //   }

// //   return (
// //     <div style={{ padding: 20 }}>
// //       <h1>Mini Shop 🛍</h1>

// //       <div style={{ display: "grid", gap: 20 }}>
// //         {products?.map((p) => (
// //           <div key={p.id} style={{ border: "1px solid #ddd", padding: 10 }}>
// //             <img src={p.image} width={150} />
// //             <h3>{p.title}</h3>
// //             <p>{p.description}</p>
// //             <b>{p.price}$</b>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // import Image from "next/image";

// // // export default function Home() {
// // //   return (
// // //     <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
// // //       <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
// // //         <Image
// // //           className="dark:invert"
// // //           src="/next.svg"
// // //           alt="Next.js logo"
// // //           width={100}
// // //           height={20}
// // //           priority
// // //         />
// // //         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
// // //           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
// // //             To get started, edit the page.tsx file.
// // //           </h1>
// // //           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
// // //             Looking for a starting point or more instructions? Head over to{" "}
// // //             <a
// // //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // //             >
// // //               Templates
// // //             </a>{" "}
// // //             or the{" "}
// // //             <a
// // //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //               className="font-medium text-zinc-950 dark:text-zinc-50"
// // //             >
// // //               Learning
// // //             </a>{" "}
// // //             center.
// // //           </p>
// // //         </div>
// // //         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
// // //           <a
// // //             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
// // //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //           >
// // //             <Image
// // //               className="dark:invert"
// // //               src="/vercel.svg"
// // //               alt="Vercel logomark"
// // //               width={16}
// // //               height={16}
// // //             />
// // //             Deploy Now
// // //           </a>
// // //           <a
// // //             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
// // //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //           >
// // //             Documentation
// // //           </a>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // }
