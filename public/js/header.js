let barButton = document.querySelector('.bar-btn');
let burgerDisplay = document.querySelector('.burger-display');

barButton.addEventListener('click', function () { 
    burgerDisplay.classList.toggle('active');
});

//add barra buscador en mobile que se despliegue