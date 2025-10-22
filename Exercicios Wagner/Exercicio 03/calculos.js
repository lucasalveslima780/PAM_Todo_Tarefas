const numeros = [5, 10, 3, 7];

const somar = (array) => array.reduce((total, numero) => total + numero, 0);

const resultado = somar(numeros);

console.log("A soma dos números é:", resultado);