document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const page = this.getAttribute('href');
            navigateToPage(page);
        });
    });
});

function navigateToPage(page) {
    console.log('Navigating to page:', page);

    window.location.href = page;
}
