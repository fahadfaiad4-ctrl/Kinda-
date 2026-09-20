document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
      });
    });
  }

  // Header shadow on scroll
  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    if (header) {
      header.style.boxShadow = window.scrollY > 10
        ? '0 6px 20px rgba(20,53,73,0.15)'
        : '0 2px 8px rgba(20,53,73,0.08)';
    }
  });

  // Animated stat counters
  var counters = document.querySelectorAll('.stat-num');
  var countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;
    countersAnimated = true;
    counters.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-count'), 10) || 0;
      var duration = 1400;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.floor(eased * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.textContent = target;
        }
      }
      requestAnimationFrame(step);
    });
  }

  // Scroll reveal for sections
  var revealTargets = document.querySelectorAll(
    '.about-grid, .service-card, .why-card, .process-step, .contact-grid'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) { observer.observe(el); });

    var heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      statsObserver.observe(heroStats);
    }
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in-view'); });
    animateCounters();
  }

  // Contact form (front-end only demo — no backend wired up)
  var contactForm = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();

      if (!name || !phone) {
        formNote.textContent = 'الرجاء تعبئة الاسم ورقم الهاتف.';
        formNote.style.color = '#E92317';
        return;
      }

      formNote.textContent = 'تم استلام طلبك بنجاح، سيتواصل معك فريقنا قريباً.';
      formNote.style.color = '#143549';
      contactForm.reset();
    });
  }
});
