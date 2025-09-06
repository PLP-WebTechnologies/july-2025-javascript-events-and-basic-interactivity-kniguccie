 // Part 1: Event Handling for Button Clicks
    const toggleButton = document.getElementById('toggleBtn');
    const message = document.getElementById('message');

    toggleButton.addEventListener('click', () => {
      message.classList.toggle('hidden');
      message.classList.toggle('visible');
      toggleButton.textContent = message.classList.contains('visible') ? 'Hide Message' : 'Show Message';
    });

    // Part 2: Light/Dark Mode Toggle Functionality
    const themeButton = document.getElementById('themeSwitch');
    const body = document.body;

    themeButton.addEventListener('click', () => {
      body.classList.toggle('light');
      body.classList.toggle('dark');
      themeButton.textContent = body.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    });

    // Part 3: Form Validation and Feedback
    const form = document.getElementById('userForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Regular expressions to validate email and password 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Real-time validation on input
    nameInput.addEventListener('input', () => {
      if (nameInput.value.length < 2) {
        nameError.textContent = 'Name must be at least 2 characters';
        nameError.className = 'error';
        nameInput.className = 'invalid';
      } else {
        nameError.textContent = 'Looks good!';
        nameError.className = 'success';
        nameInput.className = 'valid';
      }
    });

    emailInput.addEventListener('input', () => {
      if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Enter a valid email';
        emailError.className = 'error';
        emailInput.className = 'invalid';
      } else {
        emailError.textContent = 'Valid email!';
        emailError.className = 'success';
        emailInput.className = 'valid';
      }
    });

    passwordInput.addEventListener('input', () => {
      if (!passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = 'Password must be 8+ characters with letters and numbers';
        passwordError.className = 'error';
        passwordInput.className = 'invalid';
      } else {
        passwordError.textContent = 'Strong password!';
        passwordError.className = 'success';
        passwordInput.className = 'valid';
      }
    });

    // Form submission handling
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (
        nameInput.value.length >= 2 &&
        emailRegex.test(emailInput.value) &&
        passwordRegex.test(passwordInput.value)
      ) {
        alert('Form submitted successfully!');
        form.reset();
        nameError.textContent = emailError.textContent = passwordError.textContent = '';
        nameInput.className = emailInput.className = passwordInput.className = '';
      } else {
        alert('Please fix the errors before submitting.');
      }
    });