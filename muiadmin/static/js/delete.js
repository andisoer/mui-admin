document.addEventListener('DOMContentLoaded', function() {
    const itemsContainer = $("#datatable tbody");
    let deleteItemId = null; // ID item yang akan dihapus

    // Event listener untuk tombol hapus
    itemsContainer.on('click', '.delete-btn', function(e) {
        deleteItemId = $(this).data('id');
        $('#hapusModal').modal('show');
    });

    // Event listener untuk konfirmasi hapus
    document.getElementById('persetujuan').addEventListener('click', function() {
        if (deleteItemId) {
            fetch(`http://127.0.0.2:8000/apia/konsultasi/${deleteItemId}`, {
                method: 'DELETE', // Metode DELETE
                headers: {
                    // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Gagal menghapus item');
                }
                // Cek apakah respons memiliki konten
				if (response.status !== 204) { // 204 No Content
					return response.json();
				}
            })
            .then(() => {
                console.log('Item dihapus');
                $('#hapusModal').modal('hide');
                // Opsional: Hapus elemen item dari UI atau refresh halaman
				window.location.reload();
            })
            .catch(error => console.error('Error:', error));
        }
    });
});