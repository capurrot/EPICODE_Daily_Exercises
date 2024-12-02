/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let dt = "1)String";
console.log (dt);
dt = "2)Number";
console.log (dt);
dt = "3)Boolean";
console.log (dt);
dt = "4)Undefined";
console.log (dt);
dt = "5)Null";
console.log (dt);
dt = "6)Bigint";
console.log (dt);
dt = "7)Symbol";
console.log (dt);
dt = "8)Object";
console.log (dt);
let spc = " ";
console.log (spc);

let descdt = "String - E' una stringa di testo, di solito o una parola o una frase.";
console.log (descdt);

let numint = 10;
let numdec = 10.25;

descdt = "Number - E' un numero (es. " + numint + "). Accetta sia numeri interi che decimali. Se voglio inserire un decimale basta inserire un punto tra intero e decimali (es. " + numdec + ").";
console.log (descdt);
descdt = "Boolean - Indica un valore booleano, ovvero true (vero) o false (falso).";
console.log (descdt);
descdt = "Undefined - Quando in Javascript una variabile non ha un valore definito. Si ha questo datataype anche nel caso una variabile sia dichiarata ma non inizializzata.";
console.log (descdt);
descdt = "Null - Rappresenta un valore nullo. E' differente da zero. E' qualcosa di simile a un valore non esistente.";
console.log (descdt);
descdt = "Bigint - E' un nuovo datatype e viene utilizzato per numeri interi troppo grandi.";
console.log (descdt);
descdt = "Symbol - Rappresenta un identificatore univoco. (es. ID dell'utente).";
console.log (descdt);
descdt = "Object - Viene utilizzato per catalogare vari tipi di dati ed altri elementi più complessi in un unico oggetto Javascript.";
console.log (descdt);
console.log (spc);

/* Un altro modo per eseguire l'esercizio potrebbe essere questo */

let dt1 = "1)String";
let dt2 = "2)Number";
let dt3 = "3)Boolean";
let dt4 = "4)Undefined";
let dt5 = "5)Null";
let dt6 = "6)Bigint";
let dt7 = "7)Symbol";
let dt8 = "8)Object";

numint = 10;
numdec = 10.25;
let descdt1 = "String - E' una stringa di testo, di solito o una parola o una frase.";
let descdt2 = "Number - E' un numero (es. " + numint + "). Accetta sia numeri interi che decimali. Se voglio inserire un decimale basta inserire un punto tra intero e decimali (es. " + numdec + ").";
let descdt3 = "Boolean - Indica un valore booleano, ovvero true (vero) o false (falso).";
let descdt4 = "Undefined - Quando in Javascript una variabile non ha un valore definito. Si ha questo datataype anche nel caso una variabile sia dichiarata ma non inizializzata.";
let descdt5 = "Null - Rappresenta un valore nullo. E' differente da zero. E' qualcosa di simile a un valore non esistente.";
let descdt6 = "Bigint - E' un nuovo datatype e viene utilizzato per numeri interi troppo grandi.";
let descdt7 = "Symbol - Rappresenta un identificatore univoco. (es. ID dell'utente).";
let descdt8 = "Object - Viene utilizzato per catalogare vari tipi di dati ed altri elementi più complessi in un unico oggetto Javascript.";

console.log (dt1);
console.log (dt2);
console.log (dt3);
console.log (dt4);
console.log (dt5);
console.log (dt6);
console.log (dt7);
console.log (dt8);
console.log (spc);

console.log (descdt1);
console.log (descdt2);
console.log (descdt3);
console.log (descdt4);
console.log (descdt5);
console.log (descdt6);
console.log (descdt7);
console.log (descdt8);
console.log (spc);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName = "Timoteo";
console.log (myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;
let sum = num1 + num2;

console.log (sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x;
x = 12;
console.log (x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

myName = "Capurro";
console.log (myName);

/* const MyLastName = "Timoteo";
MyLastName = "Capurro"; */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let sub = 4 - x;
console.log (sub);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1;
let name2;

name1 = "john";
name2 = "John";

console.log (name1 !== name2);
console.log (name1 === name2);

name2 = name2.toLowerCase();
console.log (name1 === name2);