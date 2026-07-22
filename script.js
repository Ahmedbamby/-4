// إظهار العناصر تدريجيًا عند دخولها إلى الشاشة
document.addEventListener('DOMContentLoaded', function () {
  var revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (element) {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach(function (element) {
      element.classList.add('is-visible');
    });
  }

  // تتبع نقرات واتساب والاتصال عبر TikTok Pixel قبل فتح الرابط
  document.querySelectorAll('.contact-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!window.ttq) return;

      if (link.dataset.contact === 'whatsapp') {
        ttq.track('Contact', {
          content_name: 'WhatsApp Contact',
          content_type: 'whatsapp'
        });
      }

      if (link.dataset.contact === 'phone') {
        ttq.track('Contact', {
          content_name: 'Phone Call',
          content_type: 'phone'
        });
      }
    });
  });
});
