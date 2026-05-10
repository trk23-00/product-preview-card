import "@/components/ProductDetails.css";

interface Datos {
  categoria: string;
  titulo: string;
  description: string;
}

const ProductDetails = ({datos}:{datos:Datos}) => {
  return (
    <div>
        <h3 className="categoria">{datos.categoria}</h3>
        <h2 className="titulo">{datos.titulo}</h2>
        <p className="descripcion">{datos.description}</p> 
    </div>
  )
}

export default ProductDetails