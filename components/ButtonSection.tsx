import React from "react";
import Image from "next/image";
import "@/components/ButtonSection.css";
export const ButtonSection = () => {
  const iconoCarrito = "/icon-cart.svg";
  return (
    <button className="button_card">
      <Image src={iconoCarrito} alt="Icono de carrito" width={14} height={14} />
      <span>Add to Cart </span>
    </button>
  );
};
