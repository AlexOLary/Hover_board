const board =document.querySelector('#board')
const colors = ['#E58383FF', '#AE6133FF', '#337FAEFF', '#588E66FF', '#58818EFF', '#925798FF', '#C337A2FF', '#75DC8CFF']
const SQUARES_NUMBER = 400  //Получаем квадрат 20 на 20

for (let  i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}