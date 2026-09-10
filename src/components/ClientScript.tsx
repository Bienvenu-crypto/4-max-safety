"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientScript() {
  const pathname = usePathname();

  useEffect(() => {

    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.main-nav');

    const handleToggleClick = () => {
      nav?.classList.toggle('open');
    };

    if (toggle && nav) {
      toggle.addEventListener('click', handleToggleClick);
    }


    const mainNavLi = document.querySelectorAll('.main-nav > ul > li');
    const handleLiClick = (e: Event) => {
      if (window.innerWidth <= 980) {
        const li = e.currentTarget as HTMLElement;
        const dd = li.querySelector('.dropdown');
        if (dd) {
          e.preventDefault();
          li.classList.toggle('open');
        }
      }
    };

    mainNavLi.forEach((li) => {
      const link = li.querySelector('a');
      if (link) {
        li.addEventListener('click', handleLiClick);
      }
    });


    const tracks = document.querySelectorAll('.ticker-track');
    tracks.forEach((track) => {
      if (track.getAttribute('data-duplicated') !== 'true') {
        track.innerHTML += track.innerHTML;
        track.setAttribute('data-duplicated', 'true');
      }
    });


    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => {
      io.observe(el);
    });


    return () => {
      if (toggle) toggle.removeEventListener('click', handleToggleClick);
      mainNavLi.forEach((li) => li.removeEventListener('click', handleLiClick));
      io.disconnect();
    };
  }, [pathname]);

  return null;
}
