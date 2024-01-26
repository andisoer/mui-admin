document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery');
    let deleteGalleryId = null; // ID item yang akan dihapus

    // Event listener untuk tombol hapus
    galleryContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            console.log('test');
            deleteGalleryId = e.target.getAttribute('data-id');
            $('#deleteConfirmModal').modal('show');
        }
    });

    // Event listener untuk konfirmasi hapus
    document.getElementById('confirmDelete').addEventListener('click', function() {
        if (deleteGalleryId) {
            fetch(`http://127.0.0.1:8000/api/gallery/${deleteGalleryId}`, {
                method: 'DELETE', // Metode DELETE
                headers: {
                    // 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: deleteGalleryId }) // Include the item ID in the request body
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
                $('#deleteConfirmModal').modal('hide');
                // Opsional: Hapus elemen item dari UI atau refresh halaman
                window.location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle the error more gracefully, such as by displaying a message to the user
            });
        }
    });
});