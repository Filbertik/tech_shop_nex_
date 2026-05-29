"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const hasAdmin = document.cookie.includes("admin=true");

    if (!hasAdmin) {
      router.push("/login");
    }
  }, []);

  return <>{children}</>;
}

// import { redirect } from "next/navigation";
// import { cookies } from "next/headers";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   let isAdmin = null;

//   try {
//     const store = cookies();
//     isAdmin = store.get("admin")?.value;
//   } catch (e) {
//     // fallback якщо Turbopack ламає cookies API
//     isAdmin = null;
//   }

//   if (isAdmin !== "true") {
//     redirect("/login");
//   }

//   return <>{children}</>;
// }

// // import { headers } from "next/headers";
// // import { redirect } from "next/navigation";

// // export default function AdminLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   const cookieHeader = headers().get("cookie") || "";

// //   const isAdmin = cookieHeader
// //     .split(";")
// //     .map((c) => c.trim())
// //     .find((c) => c.startsWith("admin="))
// //     ?.split("=")[1];

// //   if (isAdmin !== "true") {
// //     redirect("/login");
// //   }

// //   return <>{children}</>;
// // }

// // // import { cookies } from "next/headers";
// // // import { redirect } from "next/navigation";

// // // export default function AdminLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode;
// // // }) {
// // //   const cookieStore = cookies();

// // //   const isAdmin = cookieStore.get("admin")?.value;

// // //   if (isAdmin !== "true") {
// // //     redirect("/login");
// // //   }

// // //   return <>{children}</>;
// // // }

// // // // import { cookies } from "next/headers";
// // // // import { redirect } from "next/navigation";

// // // // export default function AdminLayout({
// // // //   children,
// // // // }: {
// // // //   children: React.ReactNode;
// // // // }) {
// // // //   const cookieStore = cookies();
// // // //   const isAdmin = cookieStore.get("admin")?.value;

// // // //   if (isAdmin !== "true") {
// // // //     redirect("/login");
// // // //   }

// // // //   return <>{children}</>;
// // // // }

// // // // // "use client";

// // // // // import { useEffect } from "react";
// // // // // import { useRouter } from "next/navigation";

// // // // // export default function AdminLayout({
// // // // //   children,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // // }) {
// // // // //   const router = useRouter();

// // // // //   useEffect(() => {
// // // // //     const isAdmin = document.cookie.includes("admin=true");

// // // // //     if (!isAdmin) {
// // // // //       router.push("/login");
// // // // //     }
// // // // //   }, []);

// // // // //   return <>{children}</>;
// // // // // }

// // // // // // import { headers } from "next/headers";
// // // // // // import { redirect } from "next/navigation";

// // // // // // export default function AdminLayout({
// // // // // //   children,
// // // // // // }: {
// // // // // //   children: React.ReactNode;
// // // // // // }) {
// // // // // //   const cookieHeader = headers().get("cookie") || "";

// // // // // //   const isAdmin = cookieHeader
// // // // // //     .split(";")
// // // // // //     .map((c) => c.trim())
// // // // // //     .find((c) => c.startsWith("admin="))
// // // // // //     ?.split("=")[1];

// // // // // //   if (isAdmin !== "true") {
// // // // // //     redirect("/login");
// // // // // //   }

// // // // // //   return <>{children}</>;
// // // // // // }

// // // // // // // import { cookies } from "next/headers";
// // // // // // // import { redirect } from "next/navigation";

// // // // // // // export default function AdminLayout({
// // // // // // //   children,
// // // // // // // }: {
// // // // // // //   children: React.ReactNode;
// // // // // // // }) {
// // // // // // //   const cookieStore = cookies();
// // // // // // //   const isAdmin = cookieStore.get("admin")?.value;

// // // // // // //   if (isAdmin !== "true") {
// // // // // // //     redirect("/login");
// // // // // // //   }

// // // // // // //   return <>{children}</>;
// // // // // // // }

// // // // // // // // import { headers } from "next/headers";
// // // // // // // // import { redirect } from "next/navigation";

// // // // // // // // export default function AdminLayout({
// // // // // // // //   children,
// // // // // // // // }: {
// // // // // // // //   children: React.ReactNode;
// // // // // // // // }) {
// // // // // // // //   const cookieHeader = headers().get("cookie") || "";

// // // // // // // //   const isAdmin = cookieHeader
// // // // // // // //     .split("; ")
// // // // // // // //     .find((c) => c.startsWith("admin="))
// // // // // // // //     ?.split("=")[1];

// // // // // // // //   if (isAdmin !== "true") {
// // // // // // // //     redirect("/login");
// // // // // // // //   }

// // // // // // // //   return <>{children}</>;
// // // // // // // // }

// // // // // // // // // import { cookies } from "next/headers";
// // // // // // // // // import { redirect } from "next/navigation";

// // // // // // // // // export default function AdminLayout({
// // // // // // // // //   children,
// // // // // // // // // }: {
// // // // // // // // //   children: React.ReactNode;
// // // // // // // // // }) {
// // // // // // // // //   const isAdmin = cookies().get("admin")?.value;

// // // // // // // // //   if (isAdmin !== "true") {
// // // // // // // // //     redirect("/login");
// // // // // // // // //   }

// // // // // // // // //   return <>{children}</>;
// // // // // // // // // }
