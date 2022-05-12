// Menú burger display

let barButton = document.querySelector('.bar-btn');
let burgerDisplay = document.querySelector('.burger-display');

barButton.addEventListener('click', function () { 
    burgerDisplay.classList.toggle('active');
});

// Barra buscador en mobile que se despliegue

let searchButton = document.querySelector('.search-button');
let searchDisplay = document.querySelector('.search-input');

searchButton.addEventListener('click', function () { 
    searchDisplay.classList.toggle('active');
});