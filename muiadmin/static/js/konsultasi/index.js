document.addEventListener('DOMContentLoaded', function () {
    fetchKonsultasi();
});

function fetchKonsultasi() {
    const token = localStorage.getItem('accessToken');
    fetch('http://127.0.0.1:8000/api/konsultasi/',
        {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        }
    )

        .then(response => response.json())
        .then(data => displayKonsultasi(data))
        .catch(error => console.error('Error:', error));
}

function displayKonsultasi(konsultansis){
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