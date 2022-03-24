// Il programma dovrà chiedere all'utente il numero di chilometri
//  che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo 
// totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
// (con massimo due decimali, per indicare centesimi sul prezzo).


let kilometersUtente = Number = parseInt(prompt('quanti chilometri vuoi percorrere?'))
console.log(kilometersUtente, 'km percorsi')


if (kilometersUtente === Number){
    console.log('procedi')
}else{
    console.log (alert('scrivi i km in numero'));
}


let userAge = Number = parseInt(prompt('quanti anni hai?'))
console.log(userAge, 'età passeggero')

if (userAge === Number){
    console.log('procedi')
}else{
    console.log (alert('scrivi l\'età in numero'));
}


let ticketPieno = kilometersUtente * 0.21;
console.log(ticketPieno +'€', 'prezzo biglietto pieno');


let sconto20 = (ticketPieno * 20) / 100;
console.log(sconto20, 'sconto 20%');


let sconto40 = (ticketPieno * 40) / 100;
console.log(sconto40, 'sconto 40%');


let minorenni = userAge < 18;
console.log(minorenni,'minorenne')

if(minorenni = userAge < 20) {
    console.log('usufruisci dello sconto per minori', sconto20+'€')
}


let over65 = userAge > 65;
console.log(over65,'over65')

if(over65 = userAge > 65) {
    console.log('usufruisci dello sconto per over65', sconto40+'€')
}




const prezzoFinaleBiglietto = ('');
document.getElementById(prezzoFinaleBiglietto).innerHTML = 'prezzo finale';

if (minorenni) {
    console.log(ticketPieno - sconto20, 'prezzo scontato del 20%');
}else if (over65) {
    console.log(ticketPieno - sconto40,'prezzo scontato del 40%');
}