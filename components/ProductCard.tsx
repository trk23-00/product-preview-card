import { PriceSeccion } from "@/components/PriceSeccion";
import ProductDetails from "@/components/ProductDetails";
import { ButtonSection } from "@/components/ButtonSection";
import Image from "next/image";
import "@/components/ProductCard.css";

export const ProductCard = () => {
  const imgenproducto = "/image-product-mobile.jpg";
  return (
    <div className="productcontainer">
      <div className="imagen_producto">
        <Image
          src={imgenproducto}
          alt="imagen del producto"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className="descripcion_card">
        <ProductDetails />
        <PriceSeccion />
        <ButtonSection />
      </div>
    </div>
  );
};
