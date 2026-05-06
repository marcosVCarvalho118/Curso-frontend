const listaCompras = ["Tomate", "Cebola", "Farinha"]
const misturado = ["Tomate", 8, true]

listaCompras.push("Limão")

console.log(listaCompras)
console.log(listaCompras.length)

// modifica elemento especifico
listaCompras[0] = "Abacate"
// Acrescenta elemento na posição especifica
listaCompras[4] = "Limão"

console.log(listaCompras.pop())

console.log(listaCompras)

// for(começo; quando termina; acrescimo)

for (let i = 0; i < 3; i++) 
console.log(`Index ${i}: ${listaCompras[i]}`)

// percorrendo o vetor ao contrário

for (let i = listaCompras.length -1; i >= 0; i--){ 
console.log(`Index ${i}: ${listaCompras[i]}`)
} 

for(const item of listaCompras){
console.log(item)
}

// diz qual o indice de um elemento de um vetor(array)
 console.log(listaCompras.indexOf("Abacate"))

// o While faz a contagem infinita, necessita de um x++ interrompendo a contagem.
let x = 0

while (x<10){
    console.log(x)
x++
}

