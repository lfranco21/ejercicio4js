let nombre = "Luis";
let apellido = "Franco";
let estudiante = `${nombre} ${apellido}`;

console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numero_caracteres = estudiante.length;
console.log(numero_caracteres);

let primera_letra = nombre.charAt(0);
console.log(primera_letra);

let ultima_letra = apellido.charAt(apellido.length-1)
console.log(ultima_letra);

let sin_espacios = estudiante.trim();
console.log(sin_espacios);

let booleana = estudiante.includes(nombre);
console.log(booleana);