// Setting time interval
setInterval(checkBackground, 300);

function checkBackground() {
generateRandomColor();
changeBackgroundColor();
changeBackgroundText();
}

// Generating random color
function generateRandomColor() {
return '#' + Math.floor(Math.random() * 17777215).toString(16);
}

// Changing background color
function changeBackgroundColor() {
let colorBg = document.getElementById("color-overlay");
colorBg.style.backgroundColor = generateRandomColor();
}


// Changing background text
function changeBackgroundText() {
let textbg = document.getElementById("text-bg");
if (textbg.innerHTML == 'LETS ROCK AND ROLL') {
textbg.innerHTML = 'ON THE FLOOR KIDS';
} else if (textbg.innerHTML == 'ON THE FLOOR KIDS') {
textbg.innerHTML = 'HIT IT HARD';
} else if (textbg.innerHTML == 'HIT IT HARD') {
textbg.innerHTML = 'ROCK THE PARTY KIDS';
} else if (textbg.innerHTML == 'ROCK THE PARTY KIDS') {
textbg.innerHTML = 'LETS ROCK AND ROLL';
}

}