const myArrCelle = [];
const numCell = 90;

const createCel = numCell => {
    const tabellone = document.querySelector('#tabellone');
    for (let i = 1; i <= numCell; i++) {
        const cellNode = document.createElement('div');
        cellNode.className = 'cell';
        myArrCelle.push([]);
        const nCell = document.createElement('h3');
        nCell.innerText = i;
        cellNode.appendChild(nCell);
        tabellone.appendChild(cellNode);
    }
}
createCel(numCell);

const startGame = () => {
    const btnStart = document.querySelector('button');
    btnStart.addEventListener('click', rndCell);
}
startGame()

function rndCell () {
    let n = Math.round((Math.random() * numCell - 1));
    const cellSel = document.querySelectorAll('#tabellone div');
    cellSel[n].classList.add("selCell")
    setInterval(rndCell, 5*1000);
}

