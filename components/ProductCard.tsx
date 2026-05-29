type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-xl">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <b>{product.price}$</b>
    </div>
  );
}
