document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

<<<<<<< HEAD
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
=======
    // Uncomment the following lines to declare messageDiv
    const messageDiv = document.getElementById('message');
    
    var username = document.getElementById('myForm').elements['username'].value;
    var password = document.getElementById('myForm').elements['password'].value;
>>>>>>> 20312ce2f4285dc82fcf2254e9efb53afd542362

    fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login failed');
        }
        return response.json();
    })
    .then(data => {
        if (data.access) {
            localStorage.setItem('accessToken', data.access);
<<<<<<< HEAD
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
            // Redirect atau update UI setelah login sukses
            window.location.href = './tampil_admin.html';
=======
            // Use messageDiv here
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
            // Redirect atau update UI setelah login sukses
            window.location.href = './index.html';
>>>>>>> 20312ce2f4285dc82fcf2254e9efb53afd542362
        }
    })
    .catch(error => {
        console.error('Error:', error);
<<<<<<< HEAD
        messageDiv.textContent = 'Login failed: Invalid username or password';
        messageDiv.style.color = 'red';
    });
});
=======
        // Use messageDiv here
        messageDiv.textContent = 'Login failed: Invalid username or password';
        messageDiv.style.color = 'red';
    });
});
>>>>>>> 20312ce2f4285dc82fcf2254e9efb53afd542362
