/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("L'area del tuo rettangolo è: " + area(prompt("Qual'è la base del rettangolo?"), prompt("Qual'è l'altezza del rettangolo?")));

function area(l1, l2) {
    return (l1 * l2); 
}   

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let crazySum = (num1, num2) => (num1 === num2) ? ((+num1 +num2) * 3) : (+num1 + num2);
console.log(crazySum(2, 2)); 
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(n) {
    if (n<19) {
        return Math.abs(n - 19) * 3;
    } else {
        return n - 19;
    }
}
console.log(crazyDiff(25));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (n >= 20 && n <= 100) {
        return 'true';
    } else if (n === 400) {
        return 'true';
    } else {
        return '';
    }
}
console.log(boundary(25));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(str="") {
    if (str.slice(0,7) === "EPICODE") {
        return str;
    } else {
        return "EPICODE " + str;
    }
} 
console.log(epify());
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let check3and7 = function(np=0){
    switch(true) {
        case np<0:
            return 'Il numero inserito non è positivo. Inseriscine uno positivo.';
        case np>0:
            if ((np % 3) === 0 && (np % 7) === 0) {
                return 'Il numero inserito è multiplo sia di 3 che di 7.'
            } else if ((np % 3) === 0) {
                return 'Il numero inserito è multiplo di 3.'
            } else if ((np % 7) === 0) {
                return 'Il numero inserito è multiplo di 7.'
            } else {
                return 'Il numero inserito non è multiplo ne di 3 ne 7.'
            }
    }
}
console.log(check3and7(158));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(rstr="") {
    let revstr = "";
    for (let i = rstr.length - 1; i >= 0; i--) {
        revstr += rstr[i];
    }
return revstr;
}
console.log(reverseString("Ciao sono molto felice grazie al corso EPICODE"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(ustr="") {
    for (let i=0; i < ustr.length; i++) {
        if (ustr[i] === " ") {
            
        }
    }
}
console.log(upperFirst("sono felicissimo di frequentare questo corso"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
