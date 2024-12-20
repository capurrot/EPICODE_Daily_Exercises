/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("ESERCIZIO 1");
console.log("Scrivi un algoritmo per trovare il più grande tra due numeri interi.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("let a = 10;");
console.log("let b = 15;");
console.log("if(a > b) {");
console.log("  console.log('a = ' + a + ' è più grande di b = ' + b + '')");
console.log("} else if (a < b) {");
console.log("  console.log('b = ' + b + ' è più grande di a = ' + a + '')");
console.log("};");
console.log("");
console.log("Result:");

let a = 10;
let b = 15;
if(a > b) {
  console.log("a = " + a + " è più grande di b = " + b + "")
} else if (a < b) {
  console.log("b = " + b + " è più grande di a = " + a + "")
};

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("ESERCIZIO 2");
console.log("Scrivi un algoritmo che mostri 'not equal' in console se un numero intero fornito è diverso da 5.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("const userString = prompt('Per gli ercizi n. 2, 3, 4 è necessario inserire un numero intero');");
console.log("myNumber = Number(userString);");
console.log("");
console.log("if(myNumber){");
console.log("  console.log('L'utente ha scritto:', myNumber);");
console.log("} else{");
console.log("  console.log('L'utente non ha scritto un numero! Ha scritto:', userString);");
console.log("};");
console.log("");
console.log("if(myNumber < 5 || myNumber > 5) {");
console.log("  console.log('not equal')");
console.log("} else{");
console.log("  console.log('')");
console.log("};");
console.log("");
console.log("Result:");

const userString = prompt("Per gli ercizi n. 2, 3, 4 è necessario inserire un numero intero");
myNumber = Number(userString);

if(myNumber){
  console.log("L'utente ha scritto:", myNumber);
} else if (userString === null) { 
  console.log("L'utente ha inserito un valore 'null'");
} else{
  console.log("L'utente non ha scritto un numero! Ha scritto:", userString);
};

if(myNumber < 5 || myNumber > 5) {
  console.log("not equal")
} else{
  console.log("")
};

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("ESERCIZIO 3");
console.log("Scrivi un algoritmo che mostri 'divisibile per 5' in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("const Mod5 = myNumber % 5;");
console.log("");
console.log("if(Mod5 == 0 ) {");
console.log("  console.log('Divisibile per 5')");
console.log("} else{");
console.log("  console.log('')");
console.log("};");
console.log("");
console.log("Result:");

const Mod5 = myNumber % 5;

if(Mod5 === 0 ) {
  console.log("Divisibile per 5")
} else{
  console.log("")
};

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 4");
console.log("Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("const userString2 = prompt('Per l'esercizio 4 è necessario inserire un altro numero intero');");
console.log("myNumber2 = Number(userString2);");
console.log("");
console.log("if(myNumber === 8 || myNumber2 === 8 || (myNumber + myNumber2) === 8 ||  (myNumber - myNumber2) === 8 || (myNumber2 - myNumber) === 8) {");
console.log("console.log('Algoritmo verificato')");
console.log("};");
console.log("");
console.log("Result:");

const userString2 = prompt("Per l'esercizio 4 è necessario inserire un altro numero intero");
myNumber2 = Number(userString2);

if(myNumber === 8 || myNumber2 === 8 || (myNumber + myNumber2) === 8 ||  (myNumber - myNumber2) === 8 || (myNumber2 - myNumber) === 8) {
  console.log("Algoritmo verificato")
};

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("ESERCIZIO 5");
console.log("Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile 'totalShoppingCart'.");
console.log("C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).");
console.log("Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart;
const priceShip = 10;
const maxShopShip = 50;

totalShoppingCart = 60;

if(totalShoppingCart > maxShopShip ){
  console.log("Costo totale del carrello: " + totalShoppingCart + " di acquisto con spedizione gratuita")
} else {
  console.log("Costo totale del carrello: " + totalShoppingCart + " di acquisto + " + priceShip + " di spedizione = " + (totalShoppingCart + priceShip))
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("ESERCIZIO 6");
console.log("Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.");
console.log("Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

let dateBlackFriday = "20241203";
let myToday = new Date();
let myFY = myToday.getFullYear();
let myMY = ("0" + (myToday.getMonth() + 1)).slice(-2);
let myDM = ("0" + myToday.getDate()).slice(-2)
myToday = myFY + "" + myMY + "" + myDM;

if(dateBlackFriday === myToday) {
  totalShoppingCart *= 0.8; 
}

if(totalShoppingCart > maxShopShip ){
  console.log("Costo totale del carrello: " + totalShoppingCart + " di acquisto con spedizione gratuita")
} else {
  console.log("Costo totale del carrello: " + totalShoppingCart + " di acquisto + " + priceShip + " di spedizione = " + (totalShoppingCart + priceShip))
}

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("ESERCIZIO 7");
console.log("Crea tre variabili, e assegna un valore numerico a ciascuna di esse.");
console.log("Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.");
console.log("Alla fine mostra il risultato in console.");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */


let c = 25;
let d = 15;
let e = 45;

if(c > d && c > e) {
    console.log(c)
    if (d > e) {
      console.log(d)
      console.log(e)
    } else {
      console.log(e)
      console.log(d)
    }   
} else if (d > c && d > e ) {
    console.log(d)
    if (c > e) {
      console.log(c)
      console.log(e)
    } else {
      console.log(e)
      console.log(c)
    }  
} else if (e > c && e > d ) {
    console.log(e)
    if (c > d) {
      console.log(c)
      console.log(d)
  } else {
      console.log(d)
      console.log(c)
  }
};

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("ESERCIZIO 8");
console.log("Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca 'typeof').");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

myNumber = Number(userString);

if(myNumber){
  console.log("L'utente ha scritto:", myNumber);
} else if (userString === null) { 
  console.log("L'utente ha inserito un valore 'null'");
} else{
  console.log("L'utente non ha scritto un numero! Ha scritto:", userString);
};

console.log("___________________________________________________________________________________________________________________________________");
console.log("");

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9");
console.log("Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

let f = 10;

// calcolo il modulo di 2
let risultato = (f % 2);

// verifico il risultato dell'operazione
// se il risultato è maggiore di zero il numero è dispari
if (risultato > 0) {
  console.log('Numero dispari!')
} else {
console.log('Numero pari!')
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

console.log("ESERCIZIO 10");
console.log(" Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.");
console.log("let val = 7");
console.log("if (val < 10) {");
console.log("    console.log('Meno di 10');");
console.log("  } else if (val < 5) {");
console.log("    console.log('Meno di 5');");
console.log("    } else {");
console.log("    console.log('Uguale a 10 o maggiore');");
console.log("}");
console.log("");

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(me);

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];
numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(numeri);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numeri.splice(9, 1, 100);
console.log(numeri);
/* SCRIVI QUI LA TUA RISPOSTA */
