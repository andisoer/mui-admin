document.addEventListener('DOMContentLoaded',function(){
    fetchItems();
});

function fetchItems(){
    // const token = localStorage.getItem('accessToken');
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzMTQxNzY1LCJpYXQiOjE3MDMxNDE0NjUsImp0aSI6IjMzNmZkYmJjMGU0MDQyNzk5YjA4MmU5OWU3NTAxMGUwIiwidXNlcl9pZCI6MX0.iBoa54Np8fhijkwiqIWi9cJFsr_e7O7GBEfy8LN6y9E';
    fetch('http://127.0.0.2:8000/apia/konsultasi/',
    {
        headers: {
            // 'Authorization' : `Bearer ${token}`
        }
    }
    )
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error:', error));
}

function displayItems(konsultansis){
    const itemsContainer = $("#datatable tbody");

    konsultansis.forEach((konsultasi) => {
        const row = $("<tr>").html(`
            <td>${konsultasi.id}</td>
            <td>${konsultasi.nama}</td>
            <td>${konsultasi.email}</td>
            <td>${konsultasi.nomor_telepon}</td>
            <td>${konsultasi.topik}</td>
            <td>${konsultasi.pesan}</td>
            <td>${konsultasi.date}</td>
            <td>
                <a href="https://wa.me/+62${konsultasi.nomor_telepon}" target="_blank" class="btn btn-warning">Balas</a>
                <button type="button" class="btn btn-danger delete-btn" data-bs-toggle="modal" data-id="${konsultasi.id}" data-bs-target="#hapusModal">
                    Hapus
                </button>
            </td>
        `);
        
        itemsContainer.append(row);
    });
}