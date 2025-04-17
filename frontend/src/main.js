document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api')
        .then(response => response.text())
        .then(data => {
            document.getElementById('api-response').innerText = data;
        })
        .catch(error => {
            console.error('Error fetching the API:', error);
        });
});
