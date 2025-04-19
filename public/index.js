// index.js
// Redirects users to login page when they first visit the site

document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const userId = localStorage.getItem('userId');
    if (!userId) {
        // If not logged in, redirect to login page
        window.location.href = 'login.html';
        return;
    }
    
    // If logged in, redirect to the main application page
    window.location.href = 'app.html';
}); 