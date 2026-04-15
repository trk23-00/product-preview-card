import { PriceSeccion } from "@/components/PriceSeccion";
import ProductDetails from "@/components/ProductDetails";
import { ButtonSection }from "@/components/ButtonSection";
import Image from "next/image";
import "@/components/ProductCard.css"

export const ProductCard = () => {
    const imgenproducto = "/image-product-mobile.jpg";
    return (
    <div className="productcontainer">
      <Image
        src = {imgenproducto}
        alt = "imagen del producto"
        width= {360}
        height={350}
      />
      <div className="descripcion_card">
        <ProductDetails/>
        <PriceSeccion/>
        <ButtonSection/>
      </div>
    </div>
  )
}
