let number = 1234
let BigInt = 5678n

let suma = (number+Number(BigInt)).toFixed(1)
let resta = (Number(BigInt)-number).toFixed(1)
let multiplicacio = (Number(BigInt)*1234).toFixed(1)
let divisio = (Number(BigInt)/number).toFixed(1)

console.log("Suma: " +suma)
console.log("Resta: " +resta)
console.log("Multiplicació: " +multiplicacio)
console.log("Divisió: " +divisio)