// script.js
document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded!');

    // Example: Load more highlights dynamically
    const loadMoreButton = document.createElement('button');
    loadMoreButton.textContent = 'Load More Highlights';
    loadMoreButton.style.margin = '20px auto';
    loadMoreButton.style.display = 'block';
    document.getElementById('highlights').appendChild(loadMoreButton);

    loadMoreButton.addEventListener('click', function () {
        const newHighlight = document.createElement('div');
        newHighlight.className = 'highlight-item';
        newHighlight.innerHTML = `
            <img src="highlight3.jpg" alt="New Highlight">
            <p>Team C celebrates their victory!</p>
        `;
        document.querySelector('.image-container').appendChild(newHighlight);
    });
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'a65204d8e0d9439783dcb546ffdc0a13'; // Replace with your API key
    const apiUrl = 'https://api.football-data.org/v4/matches';

    fetch(apiUrl, {
        headers: {
            'X-Auth-Token': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        const matchesList = document.querySelector('#matches ul');
        matchesList.innerHTML = ''; // Clear placeholder content

        data.matches.forEach(match => {
            const matchItem = document.createElement('li');
            matchItem.textContent = `${match.homeTeam.name} vs ${match.awayTeam.name} - ${new Date(match.utcDate).toLocaleDateString()}`;
            matchesList.appendChild(matchItem);
        });
    })
    .catch(error => console.error('Error fetching match data:', error));
});