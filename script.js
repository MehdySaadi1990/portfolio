const container = document.querySelector('.container');
const topbar = document.querySelector('.topbar');
const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.action-btn, .nav-btn');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const displayButton = document.getElementById('seeMore')
const displayButton2 = document.getElementById('seeMore2')
let display = false
let display2 = false

window.addEventListener('DOMContentLoaded', () => {
  container.classList.add('visible');
  topbar.classList.add('visible');
  sections.forEach((section, index) => {
    section.style.animationDelay = `${0.18 + index * 0.08}s`;
    section.classList.add('visible');
  });
});

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
  });
}

buttons.forEach(button => {
  button.addEventListener('click', event => {
    const targetId = button.dataset.target;
    if (targetId) {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    createRipple(event, button);
    if (nav?.classList.contains('open')) {
      nav.classList.remove('open');
      menuToggle?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
      menuToggle?.setAttribute('aria-label', 'Ouvrir le menu');
    }
  });
});

function createRipple(event, element) {
  const circle = document.createElement('span');
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - element.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - element.getBoundingClientRect().top - radius}px`;
  circle.classList.add('ripple');
  const ripple = element.getElementsByClassName('ripple')[0];
  if (ripple) ripple.remove();
  element.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}
displayButton.addEventListener('click', (e)=>{
    display = !display
    if (display === true) {
         const toDisplayElements = document.querySelectorAll('.invisible')
        toDisplayElements.forEach(element => {
        element.classList.remove("to-display")
        displayButton.textContent = "Voir moins"
    });
    } else {
     const toDisplayElements = document.querySelectorAll('.invisible')
        toDisplayElements.forEach(element => {
        element.classList.add("to-display")
        displayButton.textContent = "Voir plus"
     })  
    }
    
   
    });

    displayButton2.addEventListener('click', (e)=>{
    display2 = !display2
    if (display2 === true) {
         const toDisplayElements = document.querySelectorAll('.invisible2')
        toDisplayElements.forEach(element => {
        element.classList.remove("to-display2")
        displayButton2.textContent = "Voir moins"
    });
    } else {
     const toDisplayElements = document.querySelectorAll('.invisible2')
        toDisplayElements.forEach(element => {
        element.classList.add("to-display2")
        displayButton2.textContent = "Voir plus"
     })  
    }
    
    });

