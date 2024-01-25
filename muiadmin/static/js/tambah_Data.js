document.getElementById('tambah_dt').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData();

    const judull = document.getElementById('judul').value;
    formData.append('Judul',judull);
    const gambar = document.getElementById('gambar'); // Assuming you have an input field for selecting the image
    const imageFile = gambar.files[0];
    formData.append('Gambar', imageFile);
    const deskripsii = document.getElementById('deskripsi').value;
    formData.append('Deskripsi',deskripsii);
    // const token = localStorage.getItem('accessToken');

    fetch('http://127.0.0.1:8000/api/gallery/', {
        method: 'POST',
        headers: 
            {
                // 'Content-Type' : 'application/json',
                // 'Authorization': `Bearer ${token}`
            },
        body: formData,
    })
    .then(response =>{
        if(response.ok){
            return response.formData;
        }else{
            throw new Error('Salah kabeh');
        }
        
    })
    .then(data => {
        console.log('Success :',data);
        $('#exampleModal').modal('hide');
        window.location.reload()
    })
    .catch(error => {
        console.error('Error :',error);  
    });
});