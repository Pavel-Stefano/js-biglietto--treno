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


// let userAge = Number = parseInt(prompt('quanti anni hai?'))
// console.log(userAge, 'età passeggero')

// if (userAge === Number){
//     console.log('procedi')
// }else{
//     console.log (alert('scrivi l\'età in numero'));
// }


let ticket = kilometersUtente * 0.21;
console.log(ticket)