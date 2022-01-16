const button = document.getElementById('lampochka')
const light = document.getElementById('svet')
const buttonOn = document.getElementById('qaz');
const buttonOff = document.getElementById('wsx');



// function addStyles () {
//     button.style.backgroundColor
// }


buttonOn.addEventListener('click', function () {
    button.style.backgroundColor = 'yellow';
    light.style.opacity = '100%';
} )

buttonOff.addEventListener('click', function() {
    button.style.backgroundColor = 'grey';
    light.style.opacity = '0%'
} )