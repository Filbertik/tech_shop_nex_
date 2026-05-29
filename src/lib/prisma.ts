import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma?: PrismaClient;
// };

// export const prisma =
//   globalForPrisma.prisma ?? new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   globalForPrisma.prisma = prisma;
// }

// // // import { PrismaClient } from "@prisma/client";
// // // import { PrismaClient } from "@/generated/prisma";
// // import { PrismaClient } from "@prisma/client";

// // const globalForPrisma = globalThis as unknown as {
// //   prisma?: PrismaClient;
// // };

// // export const prisma =
// //   globalForPrisma.prisma ??
// //   new PrismaClient();

// // if (process.env.NODE_ENV !== "production") {
// //   globalForPrisma.prisma = prisma;
// // }

// // // // import { PrismaClient } from "@prisma/client";
// // // import { PrismaClient } from "@/generated/prisma";

// // // const globalForPrisma = globalThis as unknown as {
// // //   prisma?: PrismaClient;
// // // };

// // // export const prisma =
// // //   globalForPrisma.prisma ??
// // //   new PrismaClient({
// // //     log: ["error"],
// // //   });

// // // if (process.env.NODE_ENV !== "production") {
// // //   globalForPrisma.prisma = prisma;
// // // }
