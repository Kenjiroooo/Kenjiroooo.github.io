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
  'AI Integration',
  'Integrated Web Development',
  'Embedded Systems',
  'LLM-Powered Apps'
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

/* ===== SCROLL REVEAL ANIMATIONS (STAGGERED) ===== */
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    '.about-grid, .skill-category, .timeline-item, .portfolio-card, .contact-grid, .section-header, .cert-card, .info-card'
  );

  reveals.forEach((el, index) => {
    if (el.dataset.revealed) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.dataset.revealed = 'true';
      // Calculate stagger delay based on siblings in same parent
      const siblings = el.parentElement.querySelectorAll(':scope > .' + el.classList[0]);
      let siblingIndex = 0;
      siblings.forEach((s, i) => { if (s === el) siblingIndex = i; });
      const staggerDelay = siblingIndex * 120;

      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.7s ease ${staggerDelay}ms, transform 0.7s ease ${staggerDelay}ms`;
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

/* ===== CERTIFICATE LIGHTBOX ===== */
const certLightbox = document.getElementById('cert-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

document.querySelectorAll('.cert-image').forEach(certImg => {
  certImg.addEventListener('click', () => {
    const imgSrc = certImg.querySelector('img').src;
    lightboxImg.src = imgSrc;
    certLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    certLightbox.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (certLightbox) {
  certLightbox.addEventListener('click', (e) => {
    if (e.target === certLightbox) {
      certLightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ===== HERO PARTICLE ANIMATION ===== */
(function() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  let mouseX = -1000, mouseY = -1000;
  const PARTICLE_COUNT = 60;
  const CONNECTION_DIST = 140;
  const MOUSE_RADIUS = 160;

  function resize() {
    const hero = document.getElementById('home');
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.8 + 0.6,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DIST) {
          const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
          ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Draw and update particles
    particles.forEach(p => {
      // Mouse interaction: gently push away
      const dx = p.x - mouseX;
      const dy = p.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_RADIUS && dist > 0) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.02;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }

      p.x += p.vx;
      p.y += p.vy;

      // Dampen velocity
      p.vx *= 0.999;
      p.vy *= 0.999;

      // Wrap around edges
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Draw dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  // Mouse tracking (only on hero)
  const heroSection = document.getElementById('home');
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });
  heroSection.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  window.addEventListener('resize', () => {
    resize();
  });

  resize();
  createParticles();
  draw();
})();
