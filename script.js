document.addEventListener('DOMContentLoaded', () => {
  // Sticky Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Hamburger Menu Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const iconHamburger = document.querySelector('.icon-hamburger');
  const iconClose = document.querySelector('.icon-close');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (isOpen) {
        iconHamburger.style.display = 'none';
        iconClose.style.display = 'block';
        document.body.style.overflow = 'hidden';
      } else {
        iconHamburger.style.display = 'block';
        iconClose.style.display = 'none';
        document.body.style.overflow = '';
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        if (iconHamburger) iconHamburger.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
        document.body.style.overflow = '';
      });
    });
  }

  // Scroll Reveal Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
  });

  // FAQ Accordion Interactivity
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const headerEl = item.querySelector('.faq-header');
    headerEl.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // Interactive Simulator Form Handler
  const simularForm = document.getElementById('simularForm');
  if (simularForm) {
    simularForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nome = document.getElementById('simNome').value.trim();
      const nicho = document.getElementById('simNicho').value;
      const objetivo = document.getElementById('simObjetivo').value;

      const mensagem = `Olá Rafa! Meu nome é ${nome}, atuo na área de ${nicho} e gostaria de um orçamento para uma landing page com foco em: ${objetivo}.`;
      const url = `https://wa.me/5511992982199?text=${encodeURIComponent(mensagem)}`;
      window.open(url, '_blank');
    });
  }

  // Smooth scroll offset for fixed header
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
