console.log("Ejercicio 1: Mayúsculas y Minúsculas");

let texto = "Hola Mundo";
console.log("Antes:", texto, "- Despues:", texto.toUpperCase());

console.log(`\n ========= \n`);

console.log("Ejercicio 2: Contando Caracteres");

texto = "JavaScript es asombroso";

let contador = 0;

for (let i = 0; i < texto.length; i++) {
  if (texto[i] === "a") {
    contador++;
  }
}

console.log("La cantidad de letras 'a' en la cadena es:", contador);

console.log(`\n ========= \n`);

console.log("Ejercicio 3: Extracción de Subcadenas");

texto = "Desarrollo con JavaScript";
let palabra = "JavaScript";

let subcadena = texto.slice(
  texto.indexOf(palabra),
  texto.indexOf(palabra) + palabra.length + 1
);

console.log("La palabra", subcadena, "extraida de", texto);

console.log(`\n ========= \n`);

console.log("Ejercicio 4: Comparación de Cadenas");

let texto1 = "Hola";
let texto2 = "hola";

if (texto1.toLowerCase() === texto2.toLowerCase()) {
  console.log("Las cadenas son iguales");
} else {
  console.log("Las cadenas son diferentes");
}

console.log(`\n ========= \n`);

console.log("Ejercicio 5: Concatenación");

let mundo = "Mundo";

console.log(texto1, mundo);

console.log(`\n ========= \n`);

console.log("Ejercicio 6: Eliminación de Espacios");

texto = "    JavaScript    ";

console.log("Antes:", texto, "- Despues:", texto.trim());

console.log(`\n ========= \n`);

console.log("Ejercicio 7: Reemplazo de Palabras");

texto = "JavaScript es genial";

console.log(
  "Antes:",
  texto,
  "- Despues:",
  texto.replace("genial", "asombroso")
);

console.log(`\n ========= \n`);

console.log("Ejercicio 8: Inversión de Cadena");

texto = "Desarrollo";

console.log("Antes:", texto, "- Despues:", texto.split("").reverse().join(""));

console.log(`\n ========= \n`);

console.log("Ejercicio 9: División en Array");

texto = "manzana,banana, cereza";

console.log("Antes:", texto, "- Despues:", texto.split(","));

console.log(`\n ========= \n`);

console.log("Ejercicio 10: Encuentra la Posición");

texto = "Aprendiendo JavaScript";

console.log(
  "La posición inicial de la palabra 'JavaScript' es:",
  texto.indexOf("JavaScript")
);
