// Sticky Header
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Reveal Animation on Scroll
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach((el) => revealObserver.observe(el));

// Global Presence Toggle
const globalToggle = document.getElementById('global-toggle');
const globalDropdown = document.getElementById('global-dropdown');

globalToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  globalDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!globalDropdown.contains(e.target) && !globalToggle.contains(e.target)) {
    globalDropdown.classList.remove('active');
  }
});

// Mobile Menu Toggle (Basic implementation)
const mobileBtn = document.querySelector('.mobile-menu-btn');
mobileBtn.addEventListener('click', () => {
  alert("Mobile menu would open here. (Responsive design focuses on Desktop/Tablet layout for this demo's aesthetics)");
});

// Smooth Scroll for Anchor Links (Native smooth scroll is in CSS, this is for fallback or specific easing if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close dropdowns
      globalDropdown.classList.remove('active');
      
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
