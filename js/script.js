const grid = document.querySelector('.grid');
const playButton = document.querySelector('.play');


const totalCells = 100;
/* const totalCells = 81; */
/* const totalCells = 49; */


playButton.addEventListener('click', play);

function play(){
  grid.innerHTML = '';
  for(let i = 1; i <= totalCells; i++){
    /* console.log(i); */
    const cell = document.createElement('div');
    cell.innerHTML += `<div class="num">${[i]}</div>`;
    cell.classList.add('cell');
    cell.classList.add('check');
    
    grid.appendChild(cell);
  }
}

const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', check);

// Seleziona l'elemento con la classe "num"
let numElement = document.querySelector('.num');

// Leggi il contenuto testuale dell'elemento
let num = numElement.textContent;

function check(){
  console.log(num);
}