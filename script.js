let currentGame = 0;

document.getElementById('infoButton').addEventListener('click', function() {
    alert('Si tu parviens à gagner tous les mini-jeux, tu remporteras un cadeau spécial !');
});

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('gamesContainer').style.display = 'block';
    document.querySelector('header').style.display = 'none';
    showGame(0);  // Commencer avec le premier jeu
});

document.getElementById('hiddenHeartButton').addEventListener('click', function() {
    showModal('https://via.placeholder.com/800x600?text=Surprise', 'Félicitations ! Tu as trouvé le cœur caché.');
});

document.getElementById('nextGameButton').addEventListener('click', function() {
    showGame(currentGame + 1);
});

function showGame(gameNumber) {
    document.querySelectorAll('.game').forEach((game, index) => {
        game.style.display = index === gameNumber ? 'block' : 'none';
    });
    if (gameNumber >= 0) {
        currentGame = gameNumber;
        if (currentGame < document.querySelectorAll('.game').length) {
            document.getElementById('progressSection').style.display = 'none';
            document.getElementById('gamesContainer').style.display = 'block';
        } else {
            alert('Félicitations ! Tu as terminé tous les mini-jeux !');
       
