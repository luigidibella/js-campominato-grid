const grid = document.querySelector('.grid');
const playButton = document.querySelector('.play')

const totalCells = 100;
/* const totalCells = 81; */
/* const totalCells = 49; */


playButton.addEventListener('click', play);


function play(){
  for(let i = 1; i <= totalCells; i++){
    console.log(i);
    const cell = document.createElement('div');
    cell.innerHTML += `<div class="num">${[i]}</li>`
    cell.classList.add('cell');
  
    grid.appendChild(cell);
  }
}