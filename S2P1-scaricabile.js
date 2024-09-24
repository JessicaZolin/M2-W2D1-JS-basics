//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 5;
let num2 = 48;

if (num1 > num2) {
  console.log(num1+" è più grande di "+num2)
}
else {
  console.log(num2+" è più grande di "+num1)
}




/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num = 15

if (num < 5) {
  console.log("Tiny")
}
 else if (num < 10) {
  console.log("Small")
}
else if (num < 15) {
  console.log("Medium")
}
else if (num < 20) {
  console.log("Large")
}
else {
  console.log("Huge")
}




//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num = 0; num < 11; num++) {
  if (num === 3 || num === 8) {
    continue;
  } else { console.log(num) 
  }
}




/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num = 0; num < 16; num++) {
  if (num % 2 !== 1) {
    console.log(num+" è un numero pari")
  }else {console.log(num+" è un numero dispari")}
}




//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 4;
let num4 = 12;

if (num3 === 8 || num4 === 8 || num3 + num4 === 8 || num3 - num4 === 8) {
  console.log("uno dei due valori, oppure la loro somma/sottrazione è uguale a 8")
} else { console.log("nessuno dei due valori e nemmeno la loro somma/sottrazione è uguale è 8")
}




/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShippingCart = 40;
let spedizione = 10;

if (totalShippingCart > 50) {
  console.log("L'ammontare da addebitare al cliente è pari a " + totalShippingCart)
} else {
  totalShippingCart = totalShippingCart + spedizione
  console.log ("L'ammontare da addebitare al cliente è pari a " + totalShippingCart)
}




/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShippingCart2 = 50;
let spedizione2 = 10;
let sconto = 20/100;
let totalShippingCart3 = totalShippingCart2 - (totalShippingCart2 * sconto)

if (totalShippingCart3 > 50) {
  console.log("L'ammontare da addebitare al cliente è pari a " + totalShippingCart3)
} else {
  totalShippingCart3 = totalShippingCart3 + spedizione
  console.log ("L'ammontare da addebitare al cliente è pari a " + totalShippingCart3)
}




/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let isMale = true ? console.log(gender = "male") : console.log(gender = "female")




/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. 
  Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num5 = 1; num5 < 101; num5++) {
  if (num5%3 === 0 && num5%5 === 0) {
    console.log("FizzBuzz")
  } else if (num5%3 === 0) {
    console.log("Fizz")
  } else if (num5%5 === 0) {
    console.log("Buzz")
  }else {
    console.log(num5)
  }
}