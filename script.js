// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Dark mode toggle
var darkModeToggle = document.getElementById('darkModeToggle');
var body = document.body;

darkModeToggle.addEventListener('change', function () {
    if (darkModeToggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for previously selected mode
var savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form values
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Perform form validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    // Send the form data to the server (replace 'submit_form.php' with the actual form submission URL)
    // You can use Ajax or fetch API to send the data asynchronously
    // Example using fetch:
    fetch('submit_form.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
        .then(response => {
            if (response.ok) {
                alert('Form submitted successfully');
                // Reset the form
                document.querySelector('form').reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            alert(error.message);
        });
});
