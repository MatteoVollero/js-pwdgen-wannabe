// chiedo di inserire il nome
var nome = prompt("Inserire il proprio nome: ");
console.log("chiedo il nome");

// chiedo di inserire il cognome
var cognome = prompt("Inserire il proprio cognome: ");
console.log("chiedo il cognome");


// chiedo di inserire il colore preferito
var colore = prompt("Inserire il proprio colore preferito: ");
console.log("chiedo il colore");


// Scrivo la Password genereata
document.getElementById('password').innerHTML = nome + cognome + colore + "19";
