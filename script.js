document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(this);

    // Send data to server-side script using AJAX
    fetch('sendEmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) 
        {
            alert('Message sent successfully!');
        } 
        else 
        {
            alert('Error sending message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
