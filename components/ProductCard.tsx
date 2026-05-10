import { PriceSeccion } from "@/components/PriceSeccion";
import ProductDetails from "@/components/ProductDetails";
import { ButtonSection } from "@/components/ButtonSection";
import Image from "next/image";
import "@/components/ProductCard.css";

interface Product {
  createdAt: string;
  title: string;
  image: string;
  category: string;
  description: string;
  newPrice: string;
  oldPrice: string;
  id: string;
}

/*title,image,category,description,
  newPrice,oldPrice*/
export const ProductCard = ({product}:{product:Product}) => {
  //const imgenproducto = {image};
  const imagenp = "/image-product-mobile.jpg";
  
  return (
    <div className="productcontainer">
      <div className="imagen_producto">
        <Image
          src={product.image}
          alt="imagen del producto"
          fill
          style={{objectFit: 'cover'}}
          />
      </div>
      <div className="descripcion_card">
        <ProductDetails
        datos={{
          categoria: product.category,
          titulo: product.title,
          description: product.description
        }}
        />
        <PriceSeccion 
        datos={{
          new: product.newPrice,
          old: product.oldPrice
        }}
        />
        <ButtonSection />
      </div>
    </div>
  );
};
