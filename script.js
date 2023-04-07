
const pastilles = document.querySelectorAll('.pastille');
const output = document.querySelector('.output');
const selector = document.querySelector('.color-selector');
const submit = document.querySelector('.submit');
const colorList = document.querySelector('.color-list');
const couleurs = [];
const clear = document.querySelector('.clear');
const removeBtn = document.querySelector('.remove');

// Setup des pastilles
pastilles.forEach(function(pastille) {
    couleurs.push(pastille.getAttribute('data-color'));
    pastille.style.backgroundColor = pastille.getAttribute('data-color');
    
    const removeBtn = document.createElement('span');
    removeBtn.classList.add('remove');
    removeBtn.innerHTML = '❌';
    pastille.appendChild(removeBtn);
    
    removeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        colorList.removeChild(pastille);
        couleurs.splice(couleurs.indexOf(pastille.getAttribute('data-color')), 1);
        console.log(couleurs);
    });

    pastille.addEventListener('click', () => {
        output.style.fill = pastille.getAttribute('data-color');
    });
});

// Ajout et suppréssion des pastilles
submit.addEventListener('click', () => {
    output.style.fill = selector.value
    if (!couleurs.includes(selector.value)) {
        couleurs.push(selector.value);
        const pastille = document.createElement('div');
        pastille.classList.add('pastille');
        pastille.setAttribute('data-color', selector.value);
        pastille.style.backgroundColor = selector.value;
        const removeBtn = document.createElement('span');
        removeBtn.classList.add('remove');
        removeBtn.textContent = '❌';

        removeBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            colorList.removeChild(pastille);
            couleurs.splice(couleurs.indexOf(selector.value), 1);
            console.log(couleurs);
        });

        pastille.appendChild(removeBtn);
        colorList.appendChild(pastille);
        pastille.addEventListener('click', () => {
            output.style.fill = pastille.getAttribute('data-color')
        })
    }
});

// Suppréssion de toutes les pastilles
clear.addEventListener('click', () => {
    pastilles.forEach(pastille => {
        colorList.removeChild(pastille);
    });
    couleurs = [];
    console.log(couleurs);
});



