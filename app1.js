// Convertir la cadena de "Hola mundo" a numeros

let abc = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let palabra = "Hola Mundo";
let final = [];
let palabraDividida = palabra.toLowerCase().split("");
console.log(palabraDividida);

for (let i = 0; i < palabraDividida.length; i++) {
    // console.log(palabraDividida[i]);
    let name = abc.indexOf(palabraDividida[i])
    final.push(name);

}

console.log(final);