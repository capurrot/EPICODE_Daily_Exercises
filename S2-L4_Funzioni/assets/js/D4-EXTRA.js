// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function checkArray() {
    let nArr = 0;
    for (let i = 0; i < giveMeRandom(0).length; i++) {
        if (giveMeRandom(0)[i] > 5) {
            nArr += giveMeRandom(0)[i];
            console.log(giveMeRandom(0)[i] + " è maggiore di 5");
        } else {
            console.log(giveMeRandom(0)[i] + " è minore di 5")
        }   
    }
    return "Il totale di tutti i numeri maggiori di 5 è: " + nArr;
}
console.log(checkArray());
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart = [
    { 
        price: 10,
        name: 'clock',
        id: 0,
        quantity: 1
    },
    { 
        price: 25,
        name: 'book',
        id: 1,
        quantity: 2
    },
    { 
        price: 50,
        name: 'ball',
        id: 2,
        quantity: 5
    },
    { 
        price: 150,
        name: 'table',
        id: 3,
        quantity: 1
    }
]

let shoppingCartTotal = () => {
    let totCart = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        totCart += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    return totCart;
}
console.log(shoppingCartTotal());
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
let newObj = {price: 1, name: 'postcard', id: 4, quantity: 35};
let addToShoppingCart = () => shoppingCart.push(newObj) && console.log("Il totale degli elementi nel carrello è: " + shoppingCart.length);
addToShoppingCart();
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = () => {
    let moreExp = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        console.log(shoppingCart[i].price, shoppingCart[i].name, moreExp);
        if (shoppingCart[i].price >= moreExp ) {
            moreExp = shoppingCart[i].price;
            var ObjMoreExp = shoppingCart[i].name;
        }
    }
    return ObjMoreExp;
}
console.log("L'oggetto più costoso nel carrello è: " + maxShoppingCart(shoppingCart))
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let lastObj;
const latestShoppingCart = () => shoppingCart.sort((a, b) => b.id - a.id) && shoppingCart[0].name;
console.log("L'ultimo elemento inserito nel carrello e: " + latestShoppingCart(shoppingCart))
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/
function loopUntil(n) {

}
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
const myAvArr = [1, 34, 55, 'Testo', 44, 'Testo2', 55];
let numOfAv = 0;
let numAv = 0;
const average = function() {
    for (const element of myAvArr) {
        if (isNaN(element)){
        } else {
            numOfAv++;
            numAv += element;
        }
    }
    return numAv/numOfAv;
}
console.log(average());
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
