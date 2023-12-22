import React from "react"
import './Carta.css'

const Carta = ({nombre, precio, img}) =>{
    console.log(nombre)
    return (
        <div className='card' style={{backgroundColor: 'red'}}> {/* Estilos en linea */}
    
            <img src={img}/>
            <h2>{nombre}</h2>
            <h3>Precio: {precio}USD</h3>
            <span>Publicado hace 6 dias</span>
        </div>
    )
}

export default Carta