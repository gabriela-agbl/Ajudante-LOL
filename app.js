const champions = [
    { name: "Aatrox", img: "champions/Aatrox_0.jpg" },
    { name: "Ahri", img: "champions/Ahri_0.jpg" },
    { name: "Akali", img: "champions/Akali_0.jpg" },
    { name: "Akshan", img: "champions/Akshan_0.jpg" },
    { name: "Alistar", img: "champions/Alistar_0.jpg" },
    { name: "Ambessa", img: "champions/Ambessa_0.jpg" },
    { name: "Amumu", img: "champions/Amumu_0.jpg" },
    { name: "Anivia", img: "champions/Anivia_0.jpg" },
    { name: "Annie", img: "champions/Annie_0.jpg" },
    { name: "Aphelios", img: "champions/Aphelios_0.jpg" },
    { name: "Ashe", img: "champions/Ashe_0.jpg" },
    { name: "Aurelion Sol", img: "champions/AurelionSol_0.jpg" },
    { name: "Aurora", img: "champions/Aurora_0.jpg" },
    { name: "Azir", img: "champions/Azir_0.jpg" },
    { name: "Bard", img: "champions/Bard_0.jpg" },
    { name: "Bel'Veth", img: "champions/Belveth_0.jpg" },
    { name: "Blitzcrank", img: "champions/Blitzcrank_0.jpg" },
    { name: "Brand", img: "champions/Brand_0.jpg" },
    { name: "Braum", img: "champions/Braum_0.jpg" },
    { name: "Briar", img: "champions/Briar_0.jpg" },
    { name: "Caitlyn", img: "champions/Caitlyn_0.jpg" },
    { name: "Camille", img: "champions/Camille_0.jpg" },
    { name: "Cassiopeia", img: "champions/Cassiopeia_0.jpg" },
    { name: "Cho'Gath", img: "champions/Chogath_0.jpg" },
    { name: "Corki", img: "champions/Corki_0.jpg" },
    { name: "Darius", img: "champions/Darius_0.jpg" },
    { name: "Diana", img: "champions/Diana_0.jpg" },
    { name: "Dr. Mundo", img: "champions/DrMundo_0.jpg" },
    { name: "Draven", img: "champions/Draven_0.jpg" },
    { name: "Ekko", img: "champions/Ekko_0.jpg" },
    { name: "Elise", img: "champions/Elise_0.jpg" },
    { name: "Evelynn", img: "champions/Evelynn_0.jpg" },
    { name: "Ezreal", img: "champions/Ezreal_0.jpg" },
    { name: "Fiddlesticks", img: "champions/FiddleSticks_0.jpg" },
    { name: "Fiora", img: "champions/Fiora_0.jpg" },
    { name: "Fizz", img: "champions/Fizz_0.jpg" },
    { name: "Galio", img: "champions/Galio_0.jpg" },
    { name: "Gangplank", img: "champions/Gangplank_0.jpg" },
    { name: "Garen", img: "champions/Garen_0.jpg" },
    { name: "Gnar", img: "champions/Gnar_0.jpg" },
    { name: "Gragas", img: "champions/Gragas_0.jpg" },
    { name: "Graves", img: "champions/Graves_0.jpg" },
    { name: "Gwen", img: "champions/Gwen_0.jpg" },
    { name: "Hecarim", img: "champions/Hecarim_0.jpg" },
    { name: "Heimerdinger", img: "champions/Heimerdinger_0.jpg" },
    { name: "Hwei", img: "champions/Hwei_0.jpg" },
    { name: "Illaoi", img: "champions/Illaoi_0.jpg" },
    { name: "Irelia", img: "champions/Irelia_0.jpg" },
    { name: "Ivern", img: "champions/Ivern_0.jpg" },
    { name: "Janna", img: "champions/Janna_0.jpg" },
    { name: "Jarvan IV", img: "champions/JarvanIV_0.jpg" },
    { name: "Jax", img: "champions/Jax_0.jpg" },
    { name: "Jayce", img: "champions/Jayce_0.jpg" },
    { name: "Jhin", img: "champions/Jhin_0.jpg" },
    { name: "Jinx", img: "champions/Jinx_0.jpg" },
    { name: "K'Sante", img: "champions/K'Sante_0.jpg" },
    { name: "Kai'Sa", img: "champions/Kaisa_0.jpg" },
    { name: "Kalista", img: "champions/Kalista_0.jpg" },
    { name: "Karma", img: "champions/Karma_0.jpg" },
    { name: "Karthus", img: "champions/Karthus_0.jpg" },
    { name: "Kassadin", img: "champions/Kassadin_0.jpg" },
    { name: "Katarina", img: "champions/Katarina_0.jpg" },
    { name: "Kayle", img: "champions/Kayle_0.jpg" },
    { name: "Kayn", img: "champions/Kayn_0.jpg" },
    { name: "Kennen", img: "champions/Kennen_0.jpg" },
    { name: "Kha'Zix", img: "champions/Khazix_0.jpg" },
    { name: "Kindred", img: "champions/Kindred_0.jpg" },
    { name: "Kled", img: "champions/Kled_0.jpg" },
    { name: "Kog'Maw", img: "champions/KogMaw_0.jpg" },
    { name: "LeBlanc", img: "champions/Leblanc_0.jpg" },
    { name: "Lee Sin", img: "champions/LeeSin_0.jpg" },
    { name: "Leona", img: "champions/Leona_0.jpg" },
    { name: "Lillia", img: "champions/Lillia_0.jpg" },
    { name: "Lissandra", img: "champions/Lissandra_0.jpg" },
    { name: "Lucian", img: "champions/Lucian_0.jpg" },
    { name: "Lulu", img: "champions/Lulu_0.jpg" },
    { name: "Lux", img: "champions/Lux_0.jpg" },
    { name: "Malphite", img: "champions/Malphite_0.jpg" },
    { name: "Malzahar", img: "champions/Malzahar_0.jpg" },
    { name: "Maokai", img: "champions/Maokai_0.jpg" },
    { name: "Master Yi", img: "champions/MasterYi_0.jpg" },
    { name: "Milio", img: "champions/Milio_0.jpg" },
    { name: "Miss Fortune", img: "champions/MissFortune_0.jpg" },
    { name: "Mordekaiser", img: "champions/Mordekaiser_0.jpg" },
    { name: "Morgana", img: "champions/Morgana_0.jpg" },
    { name: "Naafiri", img: "champions/Naafiri_0.jpg" },
    { name: "Nami", img: "champions/Nami_0.jpg" },
    { name: "Nasus", img: "champions/Nasus_0.jpg" },
    { name: "Nautilus", img: "champions/Nautilus_0.jpg" },
    { name: "Neeko", img: "champions/Neeko_0.jpg" },
    { name: "Nidalee", img: "champions/Nidalee_0.jpg" },
    { name: "Nilah", img: "champions/Nilah_0.jpg"},
    { name: "Nocturne", img: "champions/Nocturne_0.jpg"},
    { name: "Nunu e Willump", img: "champions/Nunu_0.jpg"},
    { name: "Olaf", img: "champions/Olaf_0.jpg"},
    { name: "Orianna", img: "champions/Orianna_0.jpg"},
    { name: "Ornn", img: "champions/Ornn_0.jpg"},
    { name: "Pantheon", img: "champions/Pantheon_0.jpg"},
    { name: "Poppy", img: "champions/Poppy_0.jpg"},
    { name: "Pyke", img: "champions/Pyke_0.jpg"},
    { name: "Qiyana", img: "champions/Qiyana_0.jpg"},
    { name: "Quinn", img: "champions/Quinn_0.jpg"},
    { name: "Rakan", img: "champions/Rakan_0.jpg"},
    { name: "Rammus", img: "champions/Rammus_0.jpg"},
    { name: "RekSai", img: "champions/RekSai_0.jpg"},
    { name: "Rell", img: "champions/Rell_0.jpg"},
    { name: "Renata", img: "champions/Renata_0.jpg"},
    { name: "Renekton", img: "champions/Renekton_0.jpg"},
    { name: "Rengar", img: "champions/Rengar_0.jpg"},
    { name: "Riven", img: "champions/Riven_0.jpg"},
    { name: "Rumble", img: "champions/Rumble_0.jpg"},
    { name: "Ryze", img: "champions/Ryze_0.jpg"},
    { name: "Samira", img: "champions/Samira_0.jpg"},
    { name: "Sejuani", img: "champions/Sejuani_0.jpg"},
    { name: "Senna", img: "champions/Senna_0.jpg"},
    { name: "Seraphine", img: "champions/Seraphine_0.jpg"},
    { name: "Sett", img: "champions/Sett_0.jpg"},
    { name: "Shaco", img: "champions/Shaco_0.jpg"},
    { name: "Shen", img: "champions/Shen_0.jpg"},
    { name: "Shyvana", img: "champions/Shyvana_0.jpg"},
    { name: "Singed", img: "champions/Singed_0.jpg"},
    { name: "Sion", img: "champions/Sion_0.jpg"},
    { name: "Sivir", img: "champions/Sivir_0.jpg"},
    { name: "Skarner", img: "champions/Skarner_0.jpg"},
    { name: "Smolder", img: "champions/Smolder_0.jpg"},
    { name: "Sona", img: "champions/Sona_0.jpg"},
    { name: "Soraka", img: "champions/Soraka_0.jpg"},
    { name: "Swain", img: "champions/Swain_0.jpg"},
    { name: "Sylas", img: "champions/Sylas_0.jpg"},
    { name: "Syndra", img: "champions/Syndra_0.jpg"},
    { name: "TahmKench", img: "champions/TahmKench_0.jpg"},
    { name: "Taliyah", img: "champions/Taliyah_0.jpg"},
    { name: "Talon", img: "champions/Talon_0.jpg"},
    { name: "Taric", img: "champions/Taric_0.jpg"},
    { name: "Teemo", img: "champions/Teemo_0.jpg"},
    { name: "Thresh", img: "champions/Thresh_0.jpg"},
    { name: "Tristana", img: "champions/Tristana_0.jpg"},
    { name: "Trundle", img: "champions/Trundle_0.jpg"},
    { name: "Tryndamere", img: "champions/Tryndamere_0.jpg"},
    { name: "TwistedFate", img: "champions/TwistedFate_0.jpg"},
    { name: "Twitch", img: "champions/Twitch_0.jpg"},
    { name: "Udyr", img: "champions/Udyr_0.jpg"},
    { name: "Urgot", img: "champions/Urgot_0.jpg"},
    { name: "Varus", img: "champions/Varus_0.jpg"},
    { name: "Vayne", img: "champions/Vayne_0.jpg"},
    { name: "Veigar", img: "champions/Veigar_0.jpg"},
    { name: "Velkoz", img: "champions/Velkoz_0.jpg"},
    { name: "Vex", img: "champions/Vex_0.jpg"},
    { name: "Vi", img: "champions/Vi_0.jpg"},
    { name: "Viego", img: "champions/Viego_0.jpg"},
    { name: "Viktor", img: "champions/Viktor_0.webp"},
    { name: "Vladimir", img: "champions/Vladimir_0.jpg"},
    { name: "Volibear", img: "champions/Volibear_0.jpg"},
    { name: "Warwick", img: "champions/Warwick_0.jpg"},
    { name: "Wukong", img: "champions/Wukong_0.jpg"},
    { name: "Xayah", img: "champions/Xayah_0.jpg"},
    { name: "Xerath", img: "champions/Xerath_0.jpg"},
    { name: "XinZhao", img: "champions/XinZhao_0.jpg"},
    { name: "Yasuo", img: "champions/Yasuo_0.jpg"},
    { name: "Yone", img: "champions/Yone_0.jpg"},
    { name: "Yorick", img: "champions/Yorick_0.jpg"},
    { name: "Yuumi", img: "champions/Yuumi_0.jpg"},
    { name: "Zac", img: "champions/Zac_0.jpg"},
    { name: "Zed", img: "champions/Zed_0.jpg"},
    { name: "Zeri", img: "champions/Zeri_0.jpg"},
    { name: "Ziggs", img: "champions/Ziggs_0.jpg"},
    { name: "Zilean", img: "champions/Zilean_0.jpg"},
    { name: "Zoe", img: "champions/Zoe_0.jpg"},
    { name: "Zyra", img: "champions/Zyra_0.jpg"}
];

const recommendations = {
    Aatrox: {
        runes: "Conquistador, Triunfo, Lenda: Tenacidade, Último Esforço",
        build: "Goredrinker, Sterak's Gage, Black Cleaver"
    },
    Ahri: {
        runes: "Eletrocutar, Gosto de Sangue, Globos Oculares, Caça Voraz",
        build: "Luden's Tempest, Shadowflame, Rabadon's Deathcap"
    },
    Akali: {
        runes: "Conquistador, Presença de Espírito, Lenda: Tenacidade, Golpe de Misericórdia",
        build: "Hextech Rocketbelt, Zhonya's Hourglass, Void Staff"
    },
    // Adicione mais recomendações conforme necessário
};

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