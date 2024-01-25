document.addEventListener('DOMContentLoaded', function() {
    fetchItems();
});

function fetchItems() {
const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNjI0NDA3MCwiaWF0IjoxNzA2MTU3NjcwLCJqdGkiOiI2MGMxNGUwZThjODY0Yzk2YmQ4ODY3YTVjNzMxNzYyYiIsInVzZXJfaWQiOjZ9.nzCRlQx0ZrbnH_097de4le15OYePnCBJ-JhyL2yJqR0';
    //const token = localStorage.getItem('accessToken');
fetch('http://127.0.0.1:8000/api/item/' , {
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