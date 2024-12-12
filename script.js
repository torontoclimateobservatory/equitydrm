document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById('team');
            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.className = 'team-member';

                memberCard.innerHTML = `
                    <a href="member.html?name=${encodeURIComponent(member.name)}">
                        <img src="${member.photo}" alt="${member.name}">
                    </a>
                    <h3>${member.name}</h3>
                    <p><strong></strong> ${member.title}</p>
                    <p><strong></strong> ${member.organization}</p>
                `;

                teamContainer.appendChild(memberCard);
            });
        })
        .catch(err => console.error('Error loading team data:', err));
});
