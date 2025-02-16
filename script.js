// scripts.js

// Example: Toggle dark mode
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
    });
});
