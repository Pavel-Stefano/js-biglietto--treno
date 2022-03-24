// informazioni cliente

let kilometersUtente = Number = parseInt(prompt('quanti chilometri vuoi percorrere?'))
console.log(kilometersUtente, 'km percorsi')
if (kilometersUtente === Number){
 
}else{
    console.log (alert('esprimi i km in numeri.. grazie'));
}

let userAge = Number = parseInt(prompt('quanti anni hai?'))
console.log(userAge, 'età passeggero')
if (userAge === Number){

}else{
    console.log (alert('esprimi la tua età in numeri.. grazie'));
}

// prezzo biglietto
let ticketPieno = kilometersUtente * 0.21;
console.log(ticketPieno +'€', 'prezzo biglietto pieno');

// sconti
let sconto20 = (ticketPieno * 20) / 100;
console.log(sconto20, 'sconto 20%');

let sconto40 = (ticketPieno * 40) / 100;
console.log(sconto40, 'sconto 40%');

// requisiti per i sconti
let minorenni = userAge < 18;

let over65 = userAge > 65;
console.log(over65,'over65')


// costo biglietto finale
if (minorenni) {
    
    document.getElementById('biglietto').innerHTML = (`costo del biglietto ${(ticketPieno - sconto20).toFixed(2) } € `)
}else if (over65) {
    
    document.getElementById('biglietto').innerHTML = (`costo del biglietto ${(ticketPieno - sconto40).toFixed(2) } € `)
}else { 
    
    document.getElementById('biglietto').innerHTML = (`costo del biglietto ${(ticketPieno).toFixed(2)} € `)
}   

// arrotondamento a due decimali
let ticket = ticketPieno.toFixed(2);