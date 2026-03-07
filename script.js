/* ============================================================
   KENJI D. SAKAMOTO - PORTFOLIO JAVASCRIPT
   ============================================================ */

/* ===== NAVBAR SCROLL EFFECT ===== */
const navbar = document.getElementById('navbar');
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    scrollTopBtn.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    scrollTopBtn.classList.remove('visible');
  }
  updateActiveNavLink();
});

/* ===== HAMBURGER MENU ===== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
  spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '';
  spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(span => {
      span.style.transform = '';
      span.style.opacity = '';
    });
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(span => {
      span.style.transform = '';
      span.style.opacity = '';
    });
  }
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    
    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}

/* ===== TYPED TEXT EFFECT ===== */
const typedTextEl = document.getElementById('typed-text');
const texts = [
  'Embedded Systems',
  'Robotics Control',
  'Hardware Engineering',
  'Full-Stack Web Dev'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let deletingDelay = 55;
let pauseDelay = 2200;

function typeText() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typedTextEl.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeText, 400);
      return;
    }
    setTimeout(typeText, deletingDelay);
  } else {
    typedTextEl.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeText, pauseDelay);
      return;
    }
    setTimeout(typeText, typingDelay);
  }
}

// Start typing after short delay
setTimeout(typeText, 800);

/* ===== SCROLL-TO-TOP BUTTON ===== */
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ===== PORTFOLIO FILTER ===== */
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    
    portfolioCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || filter === category) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => { card.style.display = 'none'; }, 300);
      }
    });
  });
});

/* ===== PROGRESS BAR ANIMATION (Removed) ===== */

/* ===== CONTACT FORM ===== */
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;
  
  // Simulate form submission
  setTimeout(() => {
    formSuccess.classList.add('show');
    contactForm.reset();
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    btn.disabled = false;
    
    setTimeout(() => {
      formSuccess.classList.remove('show');
    }, 5000);
  }, 1200);
});

/* ===== SCROLL REVEAL ANIMATIONS ===== */
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    '.about-grid, .skill-category, .timeline-item, .portfolio-card, .contact-grid, .section-header'
  );
  
  reveals.forEach(el => {
    if (el.dataset.revealed) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.dataset.revealed = 'true';
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();
});
