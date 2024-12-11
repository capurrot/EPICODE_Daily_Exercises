//Punto al tag input
let inputToDo = document.querySelector("input");
//Creo la variabile per memorizzare il valore di input
let valueToDo = '';
//Punto al bottone
let button = document.querySelector("button");
//Al click del bottone passo il valore di input.
button.addEventListener("click", function() {
        valueToDo = inputToDo.value;
        addRow();
});
//Eseguo la stesa funzione del click del mouse all'Invio della tastiera
inputToDo.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            document.querySelector("button").click();
        }   
});
//Aggiungo un paragrafo con il valore dell'input
function addRow() {
    let ul = document.querySelector("ul");
    let li = document.createElement('li');
    li.innerHTML = valueToDo + '<span><button class="delbtn"></button></span>';
    ul.appendChild(li);
    inputToDo.value = '';
}
//Punto al tag p
let p = document.querySelector("p");
/* p.addEventListener("click", toComplete);
function toComplete() {
    p.style.textTransform = "underline"
} */