document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Uncomment the following lines to declare messageDiv
    const messageDiv = document.getElementById('message');
    
    var username = document.getElementById('myForm').elements['username'].value;
    var password = document.getElementById('myForm').elements['password'].value;

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
            // Use messageDiv here
            messageDiv.textContent = 'Login successful!';
            messageDiv.style.color = 'green';
            // Redirect atau update UI setelah login sukses
            window.location.href = './index.html';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Use messageDiv here
        messageDiv.textContent = 'Login failed: Invalid username or password';
        messageDiv.style.color = 'red';
    });
});
