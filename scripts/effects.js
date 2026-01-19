// Subtle cursor pointer with glow
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
cursor.appendChild(cursorDot);
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursorX += (mouseX - cursorX) * 0.2;
  cursorY += (mouseY - cursorY) * 0.2;
  
  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';
});

// Smooth hover effects on interactive elements
const interactiveElements = document.querySelectorAll('.color-container, .btn, a');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-4px)';
  });
  el.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Scroll reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section, .color-container').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
