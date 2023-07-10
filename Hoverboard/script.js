const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const squares = 728;

const temp = document.getElementById('temp');
const perm = document.getElementById('perm');

let squaresArray = [];

function createSquares(result) {
  // Önceden oluşturulmuş kareleri konteynırdan kaldır
  for (let i = 0; i < squaresArray.length; i++) {
    container.removeChild(squaresArray[i]);
  }
  
  // Diziyi boşalt
  squaresArray = [];

  // Yeni kareleri oluştur
  for (let i = 0; i < squares; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);

    if (result == 'perm') {
      square.addEventListener('mouseover', () => setColor(square));
    } else {
      square.addEventListener('mouseover', () => setColor(square));
      square.addEventListener('mouseout', () => removeColor(square));
    }
    
    squaresArray.push(square); // Kareleri diziye ekle
  }
}

function removeSquares(){
    for (let i = 0; i < squares; i++) {
        container.removeChild(squaresArray[i]);
    }
}

function setColor(element)
{
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element)
{
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}
function getRandomColor()
{
    return colors[Math.floor(Math.random() * colors.length)];
}

function chooseTemp()
{
    temp.style.color = "aliceblue";
    perm.style.color = "2d2d2d";
    return createSquares("temp");
}

function choosePerm()
{
    perm.style.color = "aliceblue";
    temp.style.color = "2d2d2d";
    createSquares("perm");
}