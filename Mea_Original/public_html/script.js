let menu = document.querySelector("#menu-icon");
let navlist=document.querySelector(".navlist");

menu.onclick =()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
const dropdown = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector(".dropdown-menu");

const header=document.querySelector('header');
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const threshold = 200; // Change this value to set when the background should change

    if (scrollPosition > threshold) {
        header.classList.add('scrolled');

    } else {
        header.classList.remove('scrolled');
    }

   
});
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Autoplay configuration
    autoplay: {
      delay: 5000, // 5000ms = 5 seconds
      disableOnInteraction: false, // Keeps autoplay active even after user interaction
    },
  
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  
  var loader=document.getElementById("loader");
  window.addEventListener("load",function(){
      loader.style.display="none";
  })