function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('landRequestForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Land request submitted!');
};

document.getElementById('petitionForm').onsubmit = function(event) {
    event.preventDefault();
    alert('Petition registered!');
};

function searchLand() {
    const searchTerm = document.querySelector('#land-information input').value;
    document.getElementById('searchResults').innerText = `Searching for: ${searchTerm}`;
}
