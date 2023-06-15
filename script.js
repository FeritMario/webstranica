const itemsGrid = document.querySelector('.items-grid');

let players = [];


function add(player) {
    const playerTable = document.getElementById('playerTable');
    const row = playerTable.insertRow();
    row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.age}</td>
        <td>${player.club}</td>
        <td>${player.height}</td>
        <td>${player.position}</td>
        
    `;
}

function handlePlayer(event) {
    event.preventDefault();

    const playerForm = document.getElementById('playerForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const clubInput = document.getElementById('club');
    const positionInput = document.getElementById('position');
    const heightInput = document.getElementById('height');


    const name = nameInput.value;
    const age = ageInput.value;
    const height = heightInput.value;
    const club = clubInput.value;
    const position = positionInput.value;


    if (name && age && club && position && height) {
        const player = { name, age, club, position, height };
        players.push(player);
        addPlayerToTable(player);

        playerForm.reset();
        localStorage.setItem('players', JSON.stringify(players));
    }
}


function loadPlayersFromCache() {
    const cache = localStorage.getItem('players');
    if (cache) {
        players = JSON.parse(cache);
        for (const player of players) {
            addPlayerToTable(player);
        }
    }
}





const playerForm = document.getElementById('playerForm');
playerForm.addEventListener('submit', handlePlayer);




loadPlayersFromCache();
