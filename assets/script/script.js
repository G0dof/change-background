const btn = document.querySelector('#btn');
const p = document.querySelector('#currentColor');

function randomNumber(max){
    return Math.floor(Math.random() * max)
}

btn.addEventListener('click', () => {
    document.body.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    btn.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    p.innerHTML = document.body.style.backgroundColor
});