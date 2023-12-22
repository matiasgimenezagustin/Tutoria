import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import { Caja, Carta, ColorCard } from './components'

function App() {
  const colorCards = [
    {
      likes: 500, 
      date: '3 days ago',
      colors: ['#FFECD6', '#4CB9E7', '#3559E0', '#0F2167'],
      id: uuidv4()
    },
    {
      likes: 300, 
      date: '2 days ago',
      colors: ['#FFECD6', '#4CB9E7', '#3559E0', '#0F2167'],
      id: uuidv4()
    },
    {
      likes: 200, 
      date: '1 days ago',
      colors: ['#FFECD6', '#4CB9E7', '#3559E0', '#0F2167'],
      id: uuidv4()
    }
  ] 
  console.log(colorCards)
  let nombre =  'pepe'
  
  const [prueba, setPrueba] = useState('pepe')
  /* 
  use state devuelve un array con 2 valores. 
  el primer valor es el valor del estado el segundo es el setter */
  console.log('se cargo el componente app')
  return (
    <div>
      {/* <Carta nombre='auto lindo' precio={'4000'} img={'/images/auto-humilde.jpg'}/> 
      <Carta nombre='auto feo' precio='2000' img={'/images/auto-humilde.jpg'}/>
      <Caja/>

      {colorCards.map(colorCard => <ColorCard  {...colorCard} key={colorCard.id}/> )} */}


      <Prueba/>
      <h2>{prueba}</h2>
      <button onClick={() =>{ setPrueba('jorge')}}>Actualizar app</button>



    </div>
 
  )
}

export default App



const Prueba = () =>{
  const [title, setTitle] = useState(true)  
  const handleChangeTitle = () =>{
    setTitle(!title)
  }
  const [inputText, setInputText] = useState('')
  console.log('se cargo el componente prueba')
  let errorVacio = inputText.length == 0
  let errorMinLength = inputText.length < 10
  return (
    <div>
      
      {title && <h1>Titulo prueba</h1>}
      <button onClick={handleChangeTitle}>Cambiar</button>
      

      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      {errorVacio && <span>No puedes dejar el input vacio</span>}
      {!errorVacio && errorMinLength && <span>No puedes Escribir tan poco</span>}

      <button>Dar click</button>
      <button>Dar click</button>
    </div>
  )
}

/* Van a hacer una carta de un ecommerce con una imagen abajo un precio descripcion y hace cuantos dias se publico la noticia */

/* 
DRY = dont repeat yourself

YAGNI = you arent gonna need it

KISS = keep it simple stupid



[1, 2, 3, 4, 5]

for(let i = 0; i < arr.lenght; i++){
  console.log(arr[i])
}

for(let number of arr){
  console.log(number)
}

arr.forEach(number => console.log(number))
*/



/* 
Hacer que nuestra carta de producto sea un componente
*/

/* 
Pasar las props a nuestro componente:
nombre, precio, imagen, mensaje de fecha
*/

/* 
Crear un boton que diga comprar

al dar click al boton de comprar quiero que me aparezca el texto comprado dentro del boton


Crear dos botones, al dar click sobre ambos botones quiero que aparazca el texto 'hola' SOLO SI DI CLICK EN AMBOS

Cuando de click en el boton debera indicarme que esta clickeado (pueden cambiar el texto)
*/