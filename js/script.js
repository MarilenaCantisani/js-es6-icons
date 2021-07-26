/* Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili
come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone*/


//* Variable linking to an html element
const displayCard = document.querySelector("#icons-section > .row");

//* Function that creates and prints template cards
const renderIconsCard = (arr, displayElement) => {
    let iconsTemplate = "";

    arr.forEach((icon, i) => {
        const hasOffset = i % 5 === 0 ? `offset-md-1` : "";

        iconsTemplate += `
        <div class=" col col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body text-center">
                    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x ${icon.type}"></i>
                    <h2 class="h6 text-uppercase">${icon.name.toUpperCase()}</h2>
                </div>
            </div>   
        </div>`;
    });

    displayElement.innerHTML = iconsTemplate;
};

renderIconsCard(icons, displayCard);

/* --------------------------------- FILTERS -------------------------------- */
//* Link a variable to the select html element
const selectElement = document.getElementById("filter-section");

//* Filter icons by type
selectElement.addEventListener("change", () => {
    const filterType = selectElement.value;

    // Filter all elements:
    if (filterType === "all") {
        renderIconsCard(icons, displayCard);
        return;
    };

    const filteredIcons = icons.filter((icon) => filterType === icon.type);
    renderIconsCard(filteredIcons, displayCard);
});

