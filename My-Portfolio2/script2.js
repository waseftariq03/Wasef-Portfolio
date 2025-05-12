document.addEventListener('DOMContentLoaded', function () {
    const faders = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    faders.forEach(el => observer.observe(el));
  
    const navLinks = document.querySelectorAll('#navbarResponsive .nav-link');
    const navbarToggle = document.getElementById('navbarResponsive');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        if (navbarToggle && navbarToggle.classList.contains('show')) {
          bootstrap.Collapse.getOrCreateInstance(navbarToggle).hide();
        }
      });
    });
  });
  

  window.addEventListener("scroll", function () {
    const nav = document.getElementById("mainNav");
    if (window.scrollY > 50) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });


  
  
  