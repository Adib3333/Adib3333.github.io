document.addEventListener('DOMContentLoaded', () => {
  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.25 });

  document.querySelectorAll('.project-card, .skill').forEach((el) => {
    observer.observe(el);
  });

  // Particle animation
  function createParticles() {
    const container = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(particle);
    }
  }
  createParticles();

  // Skill hover effect
  document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skill.style.transform = 'scale(1.05)';
    });
    skill.addEventListener('mouseleave', () => {
      skill.style.transform = 'scale(1)';
    });
  });
});