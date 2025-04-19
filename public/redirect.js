// redirect.js
// Ensures users are redirected to login page if not authenticated

document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    const userId = localStorage.getItem('userId');
    if (!userId) {
        // If not logged in and not already on login page, redirect to login
        if (!window.location.pathname.includes('login.html')) {
            window.location.href = 'login.html';
        }
        return;
    }

    // Check if session is expired (24 hours)
    const loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
        const loginDate = new Date(loginTime);
        const now = new Date();
        const hoursDiff = (now - loginDate) / (1000 * 60 * 60);
        
        if (hoursDiff > 24) {
            console.log('Session expired, redirecting to login');
            localStorage.clear();
            window.location.href = 'login.html';
            return;
        }
    }
    
    // If user is logged in and on login page, redirect to app.html
    if (window.location.pathname.includes('login.html')) {
        window.location.href = 'app.html';
    }
}); 