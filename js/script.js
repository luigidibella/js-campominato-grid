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
    cell.classList.add('cell');
    /* cell.classList.add('check'); */
    cell.innerHTML += `<div class="num">${[i]}</div>`;
    
    cell.addEventListener('click', function () {
      // ! Controllo che la cella non sia stata già cliccata
      if (cell.classList.contains('cell-clicked')) return;
    
      // Se non lo è...
      cell.classList.add('cell-clicked');
      
      let numElement = this.querySelector('.num');
      let num = numElement.textContent;
      console.log(num);
    });
  
    grid.appendChild(cell);
  }
}