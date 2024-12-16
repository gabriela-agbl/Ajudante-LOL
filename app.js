const champions = [
    { name: "Garen", img: "champions/garen.png" },
    { name: "Jinx", img: "champions/jinx.png" },
    { name: "Morgana", img: "champions/morgana.png" },
    { name: "Darius", img: "champions/darius.png" },
    { name: "Ezreal", img: "champions/ezreal.png" },
    { name: "Yuumi", img: "champions/yuumi.png" },
];

const teamSelection = document.getElementById("team-selection");
const enemySelection = document.getElementById("enemy-selection");

function createChampionGrid(container) {
    champions.forEach(champion => {
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

createChampionGrid(teamSelection);
createChampionGrid(enemySelection);

document.getElementById("match-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedAllies = Array.from(teamSelection.querySelectorAll(".selected p"))
        .map(p => p.textContent);
    const selectedEnemies = Array.from(enemySelection.querySelectorAll(".selected p"))
        .map(p => p.textContent);

    const suggestions = document.getElementById("suggestions");
    suggestions.innerHTML = `
        <h3>Campeões Aliados Selecionados:</h3>
        <p>${selectedAllies.join(", ")}</p>
        <h3>Campeões Inimigos Selecionados:</h3>
        <p>${selectedEnemies.join(", ")}</p>
    `;
});