import { supabase } from "@/lib/supabase";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>

      <img
        src={product.image}
        alt={product.title}
        className="w-[400px] rounded-lg"
      />

      <p className="mt-4">{product.description}</p>

      <b className="block mt-4 text-xl">{product.price}$</b>
    </div>
  );
}
// import { supabase } from "@/lib/supabase";

// export default async function ProductPage({
//   params,
// }: {
//   params: { id: string };
// }) {
//   const { data: product } = await supabase
//     .from("products")
//     .select("*")
//     .eq("id", params.id)
//     .single();

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{product.title}</h1>
//       <img src={product.image} width={300} />
//       <p>{product.description}</p>
//       <b>{product.price}$</b>
//     </div>
//   );
// }
