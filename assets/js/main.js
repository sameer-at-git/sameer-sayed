document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          window.scroll({
            top: targetSection.offsetTop - 80, // Adjust for fixed header height
            behavior: 'smooth'
          });
        }
      });
    });
  });
  