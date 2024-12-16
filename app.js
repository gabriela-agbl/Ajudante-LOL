const champions = [
    { name: "Aatrox", img: "champions/Aatrox_0.jpg" },
    { name: "Ahri", img: "champions/Ahri_0.jpg" },
    { name: "Akali", img: "champions/Akali_0.jpg" },
    { name: "Alistar", img: "champions/Alistar_0.jpg" },
    { name: "Amumu", img: "champions/Amumu_0.jpg" },
    { name: "Anivia", img: "champions/Anivia_0.jpg" },
    { name: "Annie", img: "champions/Annie_0.jpg" },
    
];

function createChampionGrid(container, filterBarId) {
    const filterBar = document.getElementById(filterBarId);
    function updateGrid() {
        const query = filterBar.value.toLowerCase();
        container.innerHTML = "";
        champions.filter(champion => champion.name.toLowerCase().includes(query))
                 .forEach(champion => {
                     const champDiv = document.createElement("div");
                     champDiv.classList.add("champion-item");
                     champDiv.innerHTML = `
                         <img src="${champion.img}" alt="${champion.name}" title="${champion.name}">
                         <p>${champion.name}</p>
                     `;
                     champDiv.addEventListener("click", () => {
                         champDiv.classList.toggle("selected");
                     });
                     container.appendChild(champDiv);
                 });
    }
    filterBar.addEventListener("input", updateGrid);
    updateGrid();
}

createChampionGrid(document.getElementById("team-selection"), "filter-bar-team");
createChampionGrid(document.getElementById("enemy-selection"), "filter-bar-enemy");

document.getElementById("match-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedAllies = Array.from(document.querySelectorAll("#team-selection .selected p"))
        .map(p => p.textContent);
    const selectedEnemies = Array.from(document.querySelectorAll("#enemy-selection .selected p"))
        .map(p => p.textContent);

    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = `
        <h3>Campeões Aliados Selecionados:</h3>
        <p>${selectedAllies.join(", ")}</p>
        <h3>Campeões Inimigos Selecionados:</h3>
        <p>${selectedEnemies.join(", ")}</p>
    `;
});