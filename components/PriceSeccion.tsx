import "@/components/PriceSeccion.css"

interface Datos{
  new: string;
  old: string;
}

export const PriceSeccion = ({datos}: {datos: Datos}) => {
  return (
    <div className="priceseccion">
        <span className="precio">${datos.new}</span>
        <span className="descuento">${datos.old}</span>
    </div>
  )
}
