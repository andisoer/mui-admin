document.addEventListener('DOMContentLoaded', function () {
    fetchItems();
});

function fetchItems() {
    //const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMzg4NTQ0LCJpYXQiOjE3MDIzODgyNDQsImp0aSI6Ijk2NmYxMGRkODBhNDQ2NDhiMWI0Y2E5YmQxOTgwMDJjIiwidXNlcl9pZCI6MX0.k8HnJDtYjvcjrY3DoSiK6mfgM5CcysUv7mtcrmunpbQ';
    const token = localStorage.getItem('accessToken');
    fetch('http://127.0.0.1:8000/api/item/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }) // Ganti dengan URL API Anda
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error:', error));
}

function displayItems(items) {
    const itemsContainer = document.getElementById('items');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
}