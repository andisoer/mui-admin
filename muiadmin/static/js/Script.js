document.addEventListener('DOMContentLoaded',function(){
    fetchItems();
});

function fetchItems(){
    const token = localStorage.getItem('accessToken');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTQxNzY1LCJpYXQiOjE3MDMxNDE0NjUsImp0aSI6IjMzNmZkYmJjMGU0MDQyNzk5YjA4MmU5OWU3NTAxMGUwIiwidXNlcl9pZCI6MX0.iBoa54Np8fhijkwiqIWi9cJFsr_e7O7GBEfy8LN6y9E';
    fetch('http://127.0.0.1:8000/api/gallery/',
    {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    }
    )
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error:', error));
}

function displayItems(gallery){
    const itemsContainer = document.getElementById('gallery')
    gallery.forEach(gallery => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${gallery.Judul}</h5>
                    <img src="${gallery.gambar}">
                    <p class="card-text">${gallery.deskripsi}</p>
                    <button type="button" class="btn btn-warning update-btn" data-bs-toggle="modal" data-bs-target="#editModal" data-id="${item.id}">Edit</button>
                    <button type="button" class="btn btn-danger delete-btn" data-bs-toggle="modal" data-bs-target="#hapusModal" data-id="${item.id}">Hapus</button>
                </div>
            </div>
        `;
        itemsContainer.appendChild(itemElement)
    });

    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function(){
            openUpdateModal(this.getAttribute('data-id'));
        });
    });
}


function openUpdateModal(id){
    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/apia/item/${id}`,{
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data =>{
        document.getElementById('edit-nama').value = data.name;
        document.getElementById('edit-deskripsi').value = data.description;
        document.getElementById('updateItemId').value = data.id;
        $('#updateModal').modal('show');
    })
    .catch(error => console.error('Error:', error));
}
