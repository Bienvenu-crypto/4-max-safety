document.addEventListener('DOMContentLoaded', function () {

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }


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


  document.querySelectorAll('.ticker-track').forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });


  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });


  document.querySelectorAll('.course-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var syllabus = btn.closest('.course-item').querySelector('.course-syllabus');
      var open = syllabus.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.textContent = open ? '\u2212' : '+';
    });
  });


  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main-nav > ul > li').forEach(function (li) {
    var a = li.querySelector(':scope > a');
    if (a && a.getAttribute('href') === path) li.classList.add('active');
  });
});
