 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // Toggle menu hamburger pada mobile
  const hamburger = document.querySelector('.hamburger');
  const navUL = document.querySelector('nav ul');
  hamburger.addEventListener('click', () => {
    navUL.classList.toggle('active');
  });



  AOS.init({
    duration: 1000,
    once: true
  });
