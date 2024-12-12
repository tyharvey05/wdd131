document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-games');
    const gamesContent = document.getElementById('games-content');

    toggleButton.addEventListener('click', () => {
        if (gamesContent.style.display === 'none' || gamesContent.style.display === '') {
            gamesContent.style.display = 'block';
        } else {
            gamesContent.style.display = 'none';
        }
    });
});
