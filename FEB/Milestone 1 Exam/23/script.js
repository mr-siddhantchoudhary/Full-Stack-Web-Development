const colors = ["red", "blue", "green", "yellow", "orange", "purple"];

const colorBtn = document.getElementById('colorbtn');
const container = document.getElementById('container');

colorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    container.style.backgroundColor = randomColor;
})