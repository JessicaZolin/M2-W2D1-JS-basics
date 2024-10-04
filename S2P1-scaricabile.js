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


/* --------- CON INTERAZIONE HTML --------- */


function ilPiuGrande () {
  let number1 = parseInt(document.getElementById("number1").value);
  let number2 = parseInt(document.getElementById("number2").value);
  let maggiore = 0;
  let divVuoto1 = document.getElementById("divVuoto");

  if (number1 > number2) {
    maggiore = number1 + " è più rande di " + number2;
  } else if (number1 < number2) {
    maggiore = number2 + " è più grande di " + number1;
  } else {
    maggiore = "I due numeri sono uguali"
  }

  divVuoto1.innerHTML = "<h4>" + maggiore + "</h4>"
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

let num3 = 15

if (num3 < 5) {
  console.log("Tiny")
}
 else if (num3 < 10) {
  console.log("Small")
}
else if (num3 < 15) {
  console.log("Medium")
}
else if (num3 < 20) {
  console.log("Large")
}
else {
  console.log("Huge")
}


/* --------- CON INTERAZIONE HTML --------- */

function messaggio () {
  let number3 = parseInt(document.getElementById("number3").value);
  let messaggio = 0;
  let divVuoto2 = document.getElementById("divVuoto2");

  if (number3 < 5) {
    messaggio = "Tiny"
  } else if (number3 < 10) {
    messaggio = "Small"
  } else if (number3 < 15) {
    messaggio = "Medium"
  } else if (number3 < 20) {
    messaggio = "Large"
  } else {
    messaggio = "Huge"
  }

  divVuoto2.innerHTML = "<h4>" + messaggio + "</h4>"  
}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num4 = 0; num4 < 11; num4++) {
  if (num4 === 3 || num4 === 8) {
    continue;
  } else { console.log(num4) 
  }
}



/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num5 = 0; num5 < 16; num5++) {
  if (num5 % 2 !== 1) {
    console.log(num5+" è un numero pari")
  }else {console.log(num5+" è un numero dispari")}
}


/* --------- CON INTERAZIONE HTML --------- */

function pariDispari () {
  let pariDispari = "";
  let divVuoto4 = document.getElementById("divVuoto4");
  for (let i = 0; i < 16; i++){
    if(i%2 === 0) {
      pariDispari += "<h4>" + i + " è un numero pari</h4>"
    } else {
      pariDispari += "<h4>" + i + " è un numero dispari</h4>"
    }
  }
  divVuoto4.innerHTML = pariDispari
}



//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num6 = 4;
let num7 = 12;

if (num6 === 8 || num7 === 8 || num6 + num7 === 8 || num6 - num7 === 8 || num7 - num6 === 8) {
  console.log("uno dei due valori, oppure la loro somma/sottrazione è uguale a 8")
} else { console.log("nessuno dei due valori e nemmeno la loro somma/sottrazione è uguale è 8")
}


/* --------- CON INTERAZIONE HTML --------- */

function verifica () {
  let number6 = parseInt(document.getElementById("number6").value);
  let number7 = parseInt(document.getElementById("number7").value);
  let verifica = 0;
  let divVuoto5 = document.getElementById("divVuoto5");
  if (number6 === 8 || number7 === 8 || number6 + number7 === 8 || number6 - number7 === 8 || number7 - number6 === 8) {
    verifica = "<h4>Uno dei due valori oppure la loro somma/sottrazione è uguale a 8</h4>"
  } else { verifica = "<h4>Nessuno dei due valori e nemmeno la loro somma/sottrazione è uguale a 8</h4>"
  }
  divVuoto5.innerHTML = verifica
}



/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50;
let spedizione = 10;

if (totalShoppingCart > 50) {
  console.log("L'ammontare della tua spesa è pari a " + totalShoppingCart)
} else {
  totalShoppingCart = totalShoppingCart + spedizione
  console.log ("L'ammontare della tua spesa è pari a " + totalShoppingCart)
}


/* --------- CON INTERAZIONE HTML --------- */

function carrello () {
  let number8 = parseInt(document.getElementById("number8").value);
  let number9 = parseInt(document.getElementById("number9").value);
  let divVuoto6 = document.getElementById("divVuoto6");
  let spedizione = 10;
  let totalShoppingCartA = number8 + number9
  if (totalShoppingCartA > 50) {
    totalShoppingCartA = "<h4>il totale del carrello è pari a " + totalShoppingCartA + "€</h4>"
  } else {
    totalShoppingCartA = "<h4>il totale del carrello è pari a " + (totalShoppingCartA + spedizione) + "€</h4>"
  }
  divVuoto6.innerHTML = totalShoppingCartA
}



/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart = 50;
let sconto = 20/100;

totalShoppingCart = totalShoppingCart - (totalShoppingCart * sconto)

if (totalShoppingCart > 50) {
  console.log("L'ammontare della tua spesa è pari a " + totalShoppingCart)
} else {

  totalShoppingCart = totalShoppingCart + spedizione
  console.log ("L'ammontare da addebitare al cliente è pari a " + totalShoppingCart)
}


/* --------- CON INTERAZIONE HTML --------- */

function carrello2 () {
  let number10 = parseInt(document.getElementById("number10").value);
  let number11 = parseInt(document.getElementById("number11").value);
  let divVuoto7 = document.getElementById("divVuoto7");
  let spedizione = 10;
  let sconto = 0.8
  let totalShoppingCartB = (number10 + number11) * sconto
  if (totalShoppingCartB > 50) {
    totalShoppingCartB = "<h4>il totale del carrello è pari a " + totalShoppingCartB + "€</h4>"
  } else {
    totalShoppingCartB = "<h4>il totale del carrello è pari a " + (totalShoppingCartB + spedizione) + "€</h4>"
  }
  divVuoto7.innerHTML = totalShoppingCartB
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

for (let num8 = 1; num8 < 101; num8++) {
  if (num8 % 3 === 0 && num8 % 5 === 0) {
    console.log("FizzBuzz")
  } else if (num8 % 3 === 0) {
    console.log("Fizz")
  } else if (num8 % 5 === 0) {
    console.log("Buzz")
  }else {
    console.log(num8)
  }
}