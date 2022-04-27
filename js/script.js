// CHIEDERE ALL'UTENTE IL SUO NOME
const nome = prompt('Inserisci il tuo Nome');
// CHIEDERE ALL'UTENTE IL SUO COGNOME 
const cognome = prompt('Inserisci il tuo Cognome ');
// CHIEDERE ALL'UTENTE IL SUO COLORE PREFERITO
const colore = prompt('Inserisci il tuo colore preferito');
// GENERARE LA PASSWORD UTENTE 
document.getElementById('passwordgenerata').innerHTML = (
    `${nome}${cognome}${colore}${21}`
);