const button = document.getElementById("btn");
const color = document.querySelector(".color")
const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']


//функция смены значения БГ
button.addEventListener('click', function(){
    let hexColor = generateHex();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});

// наполнение hexColor значением хекс кода
function generateHex(){
    hexColor = "#";
    for (let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]
    }
    return hexColor
}

//Генерация рандомного значения из массива
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
getRandomNumber()