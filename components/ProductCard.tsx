import Link from "next/link";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border p-4 rounded-xl cursor-pointer hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md"
        />

        <h2 className="mt-2 text-lg font-semibold">{product.title}</h2>

        <p className="text-sm text-gray-600">{product.description}</p>

        <b className="block mt-2">{product.price}$</b>
      </div>
    </Link>
  );
}

// import Link from "next/link";

// export default function ProductCard({ product }: { product: Product }) {
//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className="border p-4 rounded-xl cursor-pointer">
//         <img src={product.image} />
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <b>{product.price}$</b>
//       </div>
//     </Link>
//   );
// }

// // type Product = {
// //   id: string;
// //   title: string;
// //   description: string;
// //   price: number;
// //   image: string;
// // };

// // export default function ProductCard({ product }: { product: Product }) {
// //   return (
// //     <div className="border p-4 rounded-xl">
// //       <img src={product.image} alt={product.title} />
// //       <h2>{product.title}</h2>
// //       <p>{product.description}</p>
// //       <b>{product.price}$</b>
// //     </div>
// //   );
// // }
