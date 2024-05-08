let btnRandom = document.querySelector('button');
let result = document.querySelector('input');

let maps = ['Bind', 'Haven', 'Split', 'Ascent', 'Icebox', 'Breeze', 'Fracture', 'Pearl', 'Lotus', 'Sunset'];

btnRandom.addEventListener('click', () => {
    let rdmMap = Math.floor(Math.random() * maps.length);
    result.value = maps[rdmMap];
});