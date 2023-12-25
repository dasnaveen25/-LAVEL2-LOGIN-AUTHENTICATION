function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const registrationForm = document.getElementById('registration-form');

    if (loginForm.style.display === 'block') {
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        registrationForm.style.display = 'none';
    }
}

// The login and register functions remain the same as in the previous examples
function login() {
    // ... (unchanged)
}

function register() {
    // ... (unchanged)
}