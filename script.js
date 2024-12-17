document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const teamContainer = document.getElementById('team');

            const modal = document.createElement('div');
            modal.id = 'popupModal';
            modal.className = 'popup-modal';
            modal.innerHTML = `
                <div class="popup-content">
                    <img id="modalImage" src="" alt="Member Photo">
                    <h3 id="modalName"></h3>
                    <p id="modalTitle"></p>
                    <p id="modalOrganization"></p>
                    <p id="modalBio"></p>
                    <button id="closeButton" class="close-button">&#x2715</button>
                </div>
            `;
            document.body.appendChild(modal);

            data.forEach(member => {
                const memberCard = document.createElement('div');
                memberCard.className = 'team-member';

                memberCard.innerHTML = `
                    <img src="${member.photo}" alt="${member.name}" class="clickable-image">
                    <h3>${member.name}</h3>
                    <p><strong></strong> ${member.title}</p>
                    <p><strong></strong> ${member.organization}</p>
                `;
                memberCard.querySelector('.clickable-image').addEventListener('click', () => {
                    document.getElementById('modalImage').src = member.photo;
                    document.getElementById('modalName').textContent = member.name;
                    document.getElementById('modalTitle').textContent = member.title;
                    document.getElementById('modalOrganization').textContent = member.organization;
                    document.getElementById('modalBio').textContent = member.bio;
                    modal.style.display = 'flex';
                });

                teamContainer.appendChild(memberCard);
            });

            document.addEventListener('click', (event) => {
                if (event.target.id === 'closeButton') {
                    modal.style.display = 'none';
                }
            });
        })
        .catch(err => console.error('Error loading team data:', err));
});



