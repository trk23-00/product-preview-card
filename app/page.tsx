import { ProductCard } from "@/components/ProductCard";
import "@/app/page.css"



export default async function Home() {
  const data = await fetch('https://69e270333327837a155263fb.mockapi.io/api/v1/all-product')
  const products = await data.json()
  return (
    <div>
      <main className="contenido_principal">
        {products.map((product) => {return (
          <ProductCard
          key={product.id}
          product={product} 
          />
          )})}
      </main>
    </div>
  );
}
