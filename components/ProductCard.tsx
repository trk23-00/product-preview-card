import { PriceSeccion } from "@/components/PriceSeccion";
import ProductDetails from "@/components/ProductDetails";
import Image from "next/image";
import "@/components/ProductCard.css"

export const ProductCard = () => {
    const imgenproducto = "/image-product-mobile.jpg";
    return (
    <div className="productcontainer">
      <Image
        src = {imgenproducto}
        alt = "imagen del producto"
        width={350}
        height={350}
      />
      <ProductDetails/>
      <PriceSeccion/>
    </div>
  )
}
