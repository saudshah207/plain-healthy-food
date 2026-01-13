// Plain & Simple Healthy Foods - JavaScript

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  // Add smooth scrolling behavior to anchor links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    });
  });
});
