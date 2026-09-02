document.addEventListener('DOMContentLoaded', function () {
  // mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // mobile submenu accordion
  document.querySelectorAll('.main-nav > ul > li').forEach(function (li) {
    var link = li.querySelector('a');
    var dd = li.querySelector('.dropdown');
    if (dd && link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 980) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      });
    }
  });

  // duplicate ticker content for seamless loop
  document.querySelectorAll('.ticker-track').forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  // reveal on scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // course syllabus toggle
  document.querySelectorAll('.course-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var syllabus = btn.closest('.course-item').querySelector('.course-syllabus');
      var open = syllabus.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.textContent = open ? '\u2212' : '+';
    });
  });

  // set active nav link
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav > ul > li').forEach(function (li) {
    var a = li.querySelector(':scope > a');
    if (a && a.getAttribute('href') === path) li.classList.add('active');
  });
});
