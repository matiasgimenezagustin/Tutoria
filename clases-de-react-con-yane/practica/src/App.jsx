import { useState } from 'react'

import './App.css'
import { Caja, Carta } from './components'

function App() {
  
  let nombre =  'pepe'
  return (
    <div>
      <Carta nombre='auto lindo' precio={'4000'} img={'/images/auto-humilde.jpg'}/> {/* llamamos al componente carta */}
      <Carta nombre='auto feo' precio='2000' img={'/images/auto-humilde.jpg'}/>
      <Caja/>
    </div>
 
  )
}

export default App


/* Van a hacer una carta de un ecommerce con una imagen abajo un precio descripcion y hace cuantos dias se publico la noticia */

/* 
DRY = dont repeat yourself

YAGNI = you arent gonna need it

KISS = keep it simple stupid

*/

/* 
Hacer que nuestra carta de producto sea un componente
*/

/* Pasar las props a nuestro componente:
nombre, precio, imagen, mensaje de fecha
*/