const navMenu=document.querySelector('#nav-menu'),
navToggle=document.querySelector('#nav-toggle'),
navClose=document.querySelector('#nav-close');

// Mostrar menú
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Modal de servicios
const modalViews=document.querySelectorAll('.services-modal'),
modalBtns=document.querySelectorAll('.services-button'),
modalCloses=document.querySelectorAll('.services-modal-close');

let modal=function(modalclick){
    modalViews[modalclick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })

})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal');
            
        });
    })
})

// Cambiar título de página


const pageTitle = document.getElementById('pageTitle'),
textDefault="VitalSport";


function determinarSeccionActual() {
    const sections = document.querySelectorAll('.section');
    const currentPosition = window.scrollY + window.innerHeight / 2;
  
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const sectionBottom = rect.bottom + window.scrollY;
  
      if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
        section.getAttribute('data-text')=='Inicio' ? pageTitle.textContent=textDefault: pageTitle.textContent=textDefault+"-"+section.getAttribute('data-text');
      }
    });
  }
 
  if(pageTitle) window.addEventListener('scroll', determinarSeccionActual);


//   Slider instructores

const swiper = new Swiper('.instructores-container', {
  // Optional parameters
  direction: 'horizontal',
  cssMode:true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  

});

// Slider Testimonial

var swiperTestimonial = new Swiper('.testimonial-container', {
  loop:true,
  grabCursor:true,
  spaceBetween:48,
  
  autoplay: {
    delay: 3000, // Tiempo de espera entre diapositivas en milisegundos
    disableOnInteraction: false, // Permite la reproducción automática incluso cuando el usuario interactúa con el slider
  },
});

let btnPlayStopTestimonial=document.querySelector('.swiper-testimonial-button-icon');

btnPlayStopTestimonial.addEventListener('click', function() {
  if(btnPlayStopTestimonial.classList.contains('uil-pause')){
      swiperTestimonial.autoplay.stop();
      btnPlayStopTestimonial.classList.replace('uil-pause','uil-play');
  }else{
    swiperTestimonial.autoplay.start();
    btnPlayStopTestimonial.classList.replace('uil-play','uil-pause');
  }
});
  

// Cambiar fondo de menú 

function scrollHeader(){
  const nav = document.getElementById('header')
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
  
// btn inclusivo

const btnInclusive=document.getElementById('btn-inclusive');
const btnCloseMenuInclusive=document.querySelector('.btn-close-menuinclusive');
const menuInclusive=document.querySelector('.inclusive-options');

btnInclusive.addEventListener('click',()=>{
  if(menuInclusive) menuInclusive.classList.add('inclusive-options-active');

})

if(btnCloseMenuInclusive) btnCloseMenuInclusive.addEventListener('click',()=>{
  if(menuInclusive) menuInclusive.classList.remove('inclusive-options-active');
})
  


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'

const selectedTheme = localStorage.getItem('selected-theme')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
})

// Herramientas de accesibilidad

// aumentar texto

const btnAumentarTexto = document.getElementById('aumentar-texto');

btnAumentarTexto.addEventListener('click', function() {
  const htmlElement = document.documentElement;
  const actualFontSize = parseFloat(getComputedStyle(htmlElement).fontSize);

  if(actualFontSize<25){
    let newFontSize = actualFontSize + 1; 
    htmlElement.style.fontSize = newFontSize + 'px';

  }

});
// disminuir texto

const btnDisminuirTexto = document.getElementById('disminuir-texto');

btnDisminuirTexto.addEventListener('click', function() {
  const htmlElement = document.documentElement;
  const actualFontSize = parseFloat(getComputedStyle(htmlElement).fontSize);

  if(actualFontSize>16){
    let newFontSize = actualFontSize - 1; 
    htmlElement.style.fontSize = newFontSize + 'px';

  }

});
// Restablecer

const btnReset = document.getElementById('restablecer');

btnReset.addEventListener('click', function() {
  const htmlElement = document.documentElement;
  htmlElement.style.fontSize = '16px';
  document.body.classList.remove(darkTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())

});
