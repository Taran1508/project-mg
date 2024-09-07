// Get the current URL path
const currentPath = window.location.pathname;

// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li');

// Loop through the links and add the active class based on the current URL
navLinks.forEach(link => {
    const anchor = link.querySelector('a');
    if (anchor.href.includes(currentPath)) {
        link.classList.add('active');
    }
});
