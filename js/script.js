/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili
come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone*/


const displayCard = document.querySelector("#icons-section > .row");

let iconsTemplate = "";

icons.forEach((icon) => {
    iconsTemplate += `
    <div class="card col col-md-2 shadow-sm m-3">
        <div class="card-body text-center">
            <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i>
            <h2 class="h6 text-uppercase">${icon.name.toUpperCase()}</h2>
        </div>
    </div>`;

});

console.log(iconsTemplate);

displayCard.innerHTML = iconsTemplate;