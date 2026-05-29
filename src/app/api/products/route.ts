import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// import { prisma } from "@/lib/prisma";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const products = await prisma.product.findMany();
//   return NextResponse.json(products);
// }

// // import { prisma } from "@/lib/prisma";
// // import { NextResponse } from "next/server";

// // export async function GET() {
// //   const products = await prisma.product.findMany();
// //   return NextResponse.json(products);
// // }

// // // // import { PrismaClient } from "@/src/generated/prisma";
// // // import { PrismaClient } from "@/generated/prisma";
// // // import { NextResponse } from "next/server";

// // // const prisma = new PrismaClient();

// // // // GET /api/products
// // // export async function GET() {
// // //   try {
// // //     const products = await prisma.product.findMany({
// // //       include: {
// // //         category: true,
// // //       },
// // //     });

// // //     return NextResponse.json(products);
// // //   } catch (error) {
// // //     return NextResponse.json(
// // //       { error: "Failed to fetch products" },
// // //       { status: 500 }
// // //     );
// // //   }
// // // }