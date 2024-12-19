document.addEventListener('DOMContentLoaded', async () => {
    const gameGrid = document.getElementById('game-grid');

    const loadGames = async () => {
        try {
            const response = await fetch('http://localhost:3000/games');
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }

            const games = await response.json();

            games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');
                gameCard.innerHTML = `
                    <img src="${game.image}" alt="${game.title}">
                    <h2>${game.title}</h2>
                    <a href="${game.link}">Подробнее</a>
                `;
                gameGrid.appendChild(gameCard);
            });
        } catch (error) {
            console.error('Ошибка загрузки данных:', error.message);
            gameGrid.innerHTML = `<p class="error">Не удалось загрузить данные. Попробуйте позже.</p>`;
        }
    };

    loadGames();
});
