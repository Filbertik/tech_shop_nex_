"use client";

import { useEffect, useState } from "react";

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export default function AdminProductsClient() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Products</h1>

      {products.map((p) => (
        <div key={p.id} style={{ display: "flex", gap: 20 }}>
          <img src={p.image} width={120} />
          <div>
            <h3>{p.title}</h3>
            <p>{p.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
}
