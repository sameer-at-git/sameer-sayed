document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if(targetSection) {
          window.scroll({
            top: targetSection.offsetTop - 70, // adjusts for header height
            behavior: 'smooth'
          });
        }
      });
    });
  });
  