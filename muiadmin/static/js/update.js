document.getElementById('updateGalleryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData();
  
    const judull = document.getElementById('edit-judul').value;
    formData.append('Judul', judull);
  
    const deskripsii = document.getElementById('edit-deskripsi').value;
    formData.append('Deskripsi', deskripsii);
  
    const itemId = document.getElementById('updateItemId').value;
    formData.append('id', itemId);
  
    const gambarr = document.getElementById('edit-gambar');
    const imageFile = gambarr.files[0];
  
    // Only append the image file if one has been selected
    if (imageFile) {
      formData.append('Gambar', imageFile);
    }  
    // Warning pada pengisian field
    if (judull == '' || deskripsii == '') {
      alert('Harap isi semua field!');
      return;
    }
    console.log('formData:', formData);
    fetch(`http://127.0.0.1:8000/api/gallery/${itemId}/`, {
      method: 'PUT',
      body: formData,
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Salah kabeh');
      }
      return response.json();
    })
    .then(updatedItem => {
      console.log('Success :', updatedItem);
      $('#updateModal').modal('hide');
      window.location.reload();
    })
    .catch(error => {
      console.error('Error :', error);
    });
  });