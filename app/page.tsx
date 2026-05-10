import { ProductCard } from "@/components/ProductCard";
import "@/app/page.css";
export default function Home() {
  const products = [
    {
      createdAt: "2026-05-04T06:32:40.226Z",
      title: "VALENTINO",
      image: "https://i94.servimg.com/u/f94/20/61/20/39/35318310.jpg",
      category: "Perfume",
      description:
        "Los perfumes Valentino, particularmente la línea popular Born in Roma.",
      newPrice: "199.21",
      oldPrice: "179.90",
      id: "1",
    },
    {
      createdAt: "2026-05-04T06:59:34.441Z",
      title: "SAMSUNG GALAXY A55",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3lhsBkW0bHMXyDhEw93isWRXs3VjcKMVUQ&s",
      category: "Celular",
      description:
        "Celular Samsung Galaxy A55 con pantalla amplia, buen rendimiento y cámara versátil.",
      newPrice: "399.90",
      oldPrice: "449.90",
      id: "2",
    },
    {
      createdAt: "2026-05-03T18:25:43.959Z",
      title: "LOGITECH G502",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ76vqHkL_VZQkVUEakvmjTP0H_dcUB5ixutA&s",
      category: "Accesorio",
      description:
        "Mouse gamer Logitech G502 con sensor preciso, botones programables y diseño ergonómico.",
      newPrice: "59.90",
      oldPrice: "79.90",
      id: "3",
    },
    {
      createdAt: "2026-05-03T16:46:51.653Z",
      title: "APPLE WATCH SE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQzSMuaz4h5ZRscRaYp_waEdjRyi5agkLzQ&s",
      category: "Reloj",
      description:
        "Reloj inteligente Apple Watch SE para actividad física, notificaciones y monitoreo diario.",
      newPrice: "249.90",
      oldPrice: "279.90",
      id: "4",
    },
    {
      createdAt: "2026-05-04T03:37:34.064Z",
      title: "ADIDAS MOCHILA CLASSIC",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKzwIqmQOYG7ULOWHcm_v5xLKGgLApnxg_w&s",
      category: "Mochila",
      description:
        "Mochila Adidas Classic resistente y práctica para estudio, trabajo o uso casual.",
      newPrice: "39.90",
      oldPrice: "54.90",
      id: "5",
    },
    {
      createdAt: "2026-05-03T18:38:28.059Z",
      title: "JBL FLIP 6",
      image: "https://m.media-amazon.com/images/I/614f5R8ReXL._AC_SL1500_.jpg",
      category: "Parlante",
      description:
        "Parlante Bluetooth JBL Flip 6 con sonido potente, batería duradera y diseño portátil.",
      newPrice: "109.90",
      oldPrice: "129.90",
      id: "6",
    },
    {
      createdAt: "2026-05-03T17:11:20.569Z",
      title: "HP PAVILION 15",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2fTOX3qHRDV0xqO7tr2KCVFxwTNOVsOOzA&s",
      category: "Laptop",
      description:
        "Laptop HP Pavilion 15 para estudio, trabajo y tareas multimedia de uso general.",
      newPrice: "699.90",
      oldPrice: "749.90",
      id: "7",
    },
    {
      createdAt: "2026-05-03T16:13:22.123Z",
      title: "RAY-BAN AVIATOR",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Q_sAGfF-KwfBj-auPE8J1K65BIsPMjQOMQ&s",
      category: "Lentes",
      description:
        "Lentes Ray-Ban Aviator con diseño clásico, estructura metálica y protección solar.",
      newPrice: "159.90",
      oldPrice: "189.90",
      id: "8",
    },
    {
      createdAt: "2026-05-03T22:04:38.376Z",
      title: "SONY WH-1000XM5",
      image: "https://i.blogs.es/4d8f06/sony-1000xm5-opinion/650_1200.jpg",
      category: "Audífonos",
      description:
        "Audífonos Sony WH-1000XM5 con cancelación de ruido, sonido de alta calidad y gran autonomía.",
      newPrice: "329.90",
      oldPrice: "379.90",
      id: "9",
    },
    {
      createdAt: "2026-05-04T10:10:41.004Z",
      title: "PLAYSTATION 5",
      image:
        "https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/s/o/sony-consola-playstation-5-marvel-s-spider-man-2-standard-blanco_1_.jpg",
      category: "Consola",
      description:
        "Consola PlayStation 5 con alto rendimiento, gráficos avanzados y amplio catálogo de videojuegos.",
      newPrice: "549.90",
      oldPrice: "599.90",
      id: "10",
    },
  ];

  return (
    <div className="contenido">
      <main>
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
