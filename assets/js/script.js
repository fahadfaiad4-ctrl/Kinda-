document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () { mainNav.classList.toggle('open'); });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { mainNav.classList.remove('open'); });
    });
  }

  var header = document.getElementById('siteHeader');
  window.addEventListener('scroll', function () {
    if (header) {
      header.style.boxShadow = window.scrollY > 10
        ? '0 6px 20px rgba(20,42,61,0.15)'
        : '0 2px 8px rgba(20,42,61,0.08)';
    }
  });

  var revealTargets = document.querySelectorAll(
    '.about-grid, .service-card, .value-card, .profile-card, .cert-card, .contact-grid, .md-grid'
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
  } else {
    revealTargets.forEach(function (el) { el.classList.add('in-view'); });
  }

  var contactForm = document.getElementById('contactForm');
  var formNote = document.getElementById('formNote');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var phone = document.getElementById('phone').value.trim();
      var isAr = document.documentElement.lang === 'ar';

      if (!name || !phone) {
        formNote.textContent = isAr ? 'الرجاء تعبئة الاسم ورقم الهاتف.' : 'Please fill in your name and phone number.';
        formNote.style.color = '#E02F23';
        return;
      }

      formNote.textContent = isAr
        ? 'تم استلام طلبك بنجاح، سيتواصل معك فريقنا قريباً.'
        : 'Your request has been received. Our team will contact you shortly.';
      formNote.style.color = '#356797';
      contactForm.reset();
    });
  }
});
