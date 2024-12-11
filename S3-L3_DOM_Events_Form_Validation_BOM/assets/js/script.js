//Recupero la data di oggi
const date = new Date()
//Punto al tag input
let inputToDo = document.querySelector("input");
//Creo la variabile per memorizzare il valore di input
let valueToDo = '';
//Punto al bottone
let button = document.querySelector("button");
//Al click del bottone passo il valore di input.
button.addEventListener("click", function() {
        valueToDo = inputToDo.value.trim();
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
    let table = document.querySelector("table");
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.innerHTML = valueToDo;
    td.addEventListener("click", toComplete);
    let std = document.createElement('td');
    std.style.width = '4.5em'
    let cloneBtn = document.createElement('button');
    cloneBtn.classList.add("btnList")
    cloneBtn.innerHTML = '<i class="fa-solid fa-eye-dropper"></i>';
    cloneBtn.addEventListener("click", cloneTask);
    let delBtn = document.createElement('button');
    delBtn.classList.add("btnList")
    delBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    delBtn.addEventListener("click", () => table.removeChild(tr));
    table.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(std);
    std.appendChild(cloneBtn);
    std.appendChild(delBtn);
    inputToDo.value = '';
    function cloneTask () {
        if (td.innerText.includes("Completato il:")) {
            let strComp = td.innerText.indexOf('Completato');
            inputToDo.value = td.innerText.slice(0, strComp);
        } else {
            inputToDo.value = td.innerText
        }
        }
    function toComplete () {
        if (td.classList.contains('toComplete')) {
            td.classList.remove('toComplete')
            td.lastChild.remove();
        } else {
            td.classList.add('toComplete');
            let dtComplete = document.createElement('span');
            dtComplete.innerHTML = `Completato il: ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
            td.appendChild(dtComplete);
        }
    }
}