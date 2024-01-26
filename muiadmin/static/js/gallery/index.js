document.addEventListener('DOMContentLoaded', function () {
    fetchGallery();
});

function fetchGallery() {
    // const token = localStorage.getGallery('accessToken');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTQxNzY1LCJpYXQiOjE3MDMxNDE0NjUsImp0aSI6IjMzNmZkYmJjMGU0MDQyNzk5YjA4MmU5OWU3NTAxMGUwIiwidXNlcl9pZCI6MX0.iBoa54Np8fhijkwiqIWi9cJFsr_e7O7GBEfy8LN6y9E';
    fetch('http://127.0.0.1:8000/api/gallery/',
        {
            headers: {
                // 'Authorization' : `Bearer ${token}`
            }
        }
    )
        .then(response => response.json())
        .then((data) => {
            displayGallery(data);
        })
        .catch(error => console.error('Error:', error));
}

function displayGallery(gallery) {
    const itemsContainer = document.getElementById('gallery');
    gallery.forEach(gallery => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-2');
        itemElement.innerHTML = `
            <div class="card" style="max-width: 100%; height: auto;">
                <div class="sampul">
                    <img style="width:186px; height:100px; object-fit:cover; float:left;" src="${gallery.Gambar}" class="card-img-top" style="width: 200px; height: 120px">
                </div>
                <h2 class="card-title" style="color: #009240; margin: 8px; font-family: Roboto; font-size: 12px; font-style: normal; font-weight: 700; line-height: normal;">${gallery.Judul}</h2>
                <button type="button" class="btn btn-success update-btn" style="width: 100%; height= auto; font-size= 12px;" data-bs-toggle="modal" data-bs-target="#updateGallery" data-id="${gallery.id}">Edit</button>            
            </div>
        `;
        itemsContainer.appendChild(itemElement)
    });

    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function () {
            openUpdateModal(this.getAttribute('data-id'));
        });
    });
}

function openUpdateModal(id) {
    // const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/api/gallery/${id}`, {
        headers: {
            // 'Authorization' : `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            document.getElementById('edit-judul').value = data.Judul;
            const imgElement = document.getElementById('edit-gambar');
            imgElement.src = data.Gambar;
            document.getElementById('edit-deskripsi').value = data.Deskripsi;
            document.getElementById('updateItemId').value = data.id;
            document.getElementById('edit-gambar-name').value = data.Gambar.split('/').pop();
            $('#updateModal').modal('show');
        })
        .catch(error => console.error('Error:', error));
}