export default function Page() {
  return (
    <div>
      <h1>ADMIN PANEL</h1>
      <p>Products works</p>
    </div>
  );
}

// // import prisma from "@/lib/prisma";
// import { prisma } from "@/lib/prisma";

// export default async function Page() {
//   const products = await prisma.product.findMany();

//   return (
//     <div>
//       <h1>ADMIN PRODUCTS</h1>

//       {products.map((p) => (
//         <div key={p.id}>
//           <p>{p.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// // export default function Page() {
// //   return (
// //     <div>
// //       <h1>ADMIN PANEL</h1>
// //       <p>Products admin works</p>
// //     </div>
// //   );
// // }

// // // "use client";

// // // import { useEffect } from "react";
// // // import { useRouter } from "next/navigation";

// // // export default function Page() {
// // //   const router = useRouter();

// // //   useEffect(() => {
// // //     const isAuth = document.cookie.includes("auth=1");

// // //     if (!isAuth) {
// // //       router.push("/login");
// // //     }
// // //   }, []);

// // //   return <div>ADMIN PANEL</div>;
// // // }

// // // // import { redirect } from "next/navigation";

// // // // export default function Page() {
// // // //   const cookieHeader = (globalThis as any)?.headers?.get?.("cookie") || "";

// // // //   const isAdmin = cookieHeader
// // // //     .split(";")
// // // //     .map((c: string) => c.trim())
// // // //     .find((c: string) => c.startsWith("admin="))
// // // //     ?.split("=")[1];

// // // //   if (isAdmin !== "true") {
// // // //     redirect("/login");
// // // //   }

// // // //   return <div>Admin Products Page</div>;
// // // // }

// // // // // import { cookies } from "next/headers";
// // // // // import { redirect } from "next/navigation";
// // // // // import AdminProductsClient from "./AdminProductsClient";

// // // // // export default function Page() {
// // // // //   const isAdmin = cookies().get("admin");

// // // // //   if (!isAdmin) {
// // // // //     redirect("/login");
// // // // //   }

// // // // //   return <AdminProductsClient />;
// // // // // }
