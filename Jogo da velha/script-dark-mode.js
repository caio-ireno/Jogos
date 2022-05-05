function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses (){
    Q1.classList.toggle('dark-mode');
    Q2.classList.toggle('dark-mode');
    Q3.classList.toggle('dark-mode');
    Q4.classList.toggle('dark-mode');
    Q5.classList.toggle('dark-mode');
    Q6.classList.toggle('dark-mode');
    Q7.classList.toggle('dark-mode');
    Q8.classList.toggle('dark-mode');
    Q9.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode-body');
    h1.classList.toggle('dark-mode-h1');
    win.classList.toggle('dark-mode-h1');
    player.classList.toggle('dark-mode-h1');
}

function changeText(){
    const LightMode = "Light Mode"
    const DarkMode = "Dark Mode"
    const botao = document.getElementById("mode-selector")
    if( body.classList.contains('dark-mode-body')){
        botao.innerHTML = LightMode;
        return;
    }

    botao.innerHTML = DarkMode;

}

const button = document.getElementById('mode-selector');
const Q1 = document.getElementById(1)
const Q2 = document.getElementById(2)
const Q3 = document.getElementById(3)
const Q4 = document.getElementById(4)
const Q5 = document.getElementById(5)
const Q6 = document.getElementById(6)
const Q7 = document.getElementById(7)
const Q8 = document.getElementById(8)
const Q9 = document.getElementById(9)
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const win = document.getElementById('player')
const player = document.getElementById('win')

button.addEventListener('click', changeMode);