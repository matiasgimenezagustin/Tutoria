/* Creen la funcion saludar que reciba un nombre y nos devuelva un string que diga 'hola' + el nombre recibido  */


/* Arrow function */
/* const saludar = (nombre) =>{
    alert('hola, buen dia ' + nombre)
    let respuesta = prompt('Como estas?')
    console.log(nombre + ': ' + respuesta)
}


saludar('maria')
saludar('pedro')
 */
/* calcularIva(90)

function calcularIva (precio){
    console.log('El iva del producto es: $' + precio * 0.21)
}

 */

/* calcularIva(prompt(prompt('ingresa el mensaje para el usuario ')))//callstack */
/* 
calcular iva
1 prompt
2 prompt

*/
/* 
3 . x + 1
x = 6
3 . 5 + 1 = 16
3 . 6 + 1 = 19
*/

/* 
const sumar = (a, b) => a + b


console.log(sumar(7, 9)) */

const productos = [
    {
        nombre: 'tv samsung',
        precio: 500
    },
    {
        nombre: 'tv LG',
        precio: 530
    },
    {
        nombre: 'tv samsung 40"',
        precio: 650
    },
    {
        nombre: 'tv samsung 40"',
        precio: 700
    }
]


console.log(productos.filter((producto) => producto.precio > 600 && producto.precio < 700))