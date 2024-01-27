document.addEventListener('DOMContentLoaded', function () {
    fetchHome();
});

// In your fetchItems() function, update the display calls
function fetchHome() {
    const token = localStorage.getItem('accessToken');
    console.log('panggil');
    fetch('http://127.0.0.1:8000/api/home/', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => {
            displayJudul(data);
            displayDeskripsi(data);
            displayLinkVideo(data);
        })
        .catch(error => console.error('Error: ', error));
}


function displayJudul(items) {
    const itemsContainer = document.getElementById('form-judul');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
        <label for="judul" class="form-label fw-medium mt-4">Judul Web</label>
        <div
            class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
            <input type="text" class="form-control mb-2 mb-md-0" id="dataJudul" style="max-width: 70%;"
                placeholder="Masukkan judul web" name="judul" value="${item.judul}">
            <input type="hidden" id="dataId" name="dataId" value="1">
        </div>
        `;

        itemsContainer.appendChild(itemElement);
    })
}

function displayDeskripsi(items) {
    const itemsContainer = document.getElementById('form-deskripsi');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <label for="deskripsi" class="form-label fw-medium mt-4">Deskripsi Web</label>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <textarea rows=7 class="form-control mb-2 mb-md-0" id="dataDeskripsi" style="max-width: 70%;" 
                    placeholder="Masukkan deskripsi web" name="deskripsi">${item.deskripsi}</textarea>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
}

function displayLinkVideo(items) {
    const itemsContainer = document.getElementById('form-link-video');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <label for="linkVideo" class="form-label fw-medium mt-4">Link Video</label>
            <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                <input type="text" class="form-control mb-2 mb-md-0" id="dataLinkVideo" style="max-width: 70%;" 
                    placeholder="Masukkan link video" name="linkVideo" value="${item.link_video}">
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
}

// Update your PATCH request for judul
document.getElementById('editJudul').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemId = document.getElementById('dataId').value;
    const itemJudul = document.getElementById('dataJudul').value;
    const data = {
        judul: itemJudul,
    };
    updateItem(itemId, data);
});

// Add a similar event listener for the deskripsi form
document.getElementById('editDeskripsi').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemId = document.getElementById('dataId').value;
    const itemDeskripsi = document.getElementById('dataDeskripsi').value;
    const data = {
        deskripsi: itemDeskripsi,
    };
    updateItem(itemId, data);
});

// Add a similar event listener for the link video form
document.getElementById('editLinkVideo').addEventListener('submit', function (e) {
    e.preventDefault();
    const itemId = document.getElementById('dataId').value;
    const itemLinkVideo = document.getElementById('dataLinkVideo').value;
    const data = {
        link_video: itemLinkVideo,
    };
    updateItem(itemId, data, getToken);
});

// Refactor the common logic for updating items
function updateItem(itemId, data) {
    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/api/home/${itemId}/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then(updateItem => {
            console.log('Item updated', updateItem);
            location.reload();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}