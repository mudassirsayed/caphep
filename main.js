// select elements
// mobile menu
const mobileMenu = document.querySelector('.mobile__menu')
const navMenu = document.querySelector('.navigation')

mobileMenu.addEventListener('click', () => {
  navMenu.classList.add('show__menu')
})

navMenu.addEventListener('click', () => {
  navMenu.classList.remove('show__menu')
})

document.addEventListener('DOMContentLoaded', function () {
  function animateCounter(elementId, finalValue, duration) {
    let startTime = null;
    let currentCount = 0;
    const counterElement = document.getElementById(elementId);

    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
      const value = Math.floor(progress * finalValue); // Calculate current value based on progress
      counterElement.textContent = value + '+';

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  function animateSalaryCounter(elementId, finalValue, duration) {
    let startTime = null;
    let currentCount = 0;
    const counterElement = document.getElementById(elementId);

    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Ensure progress doesn't exceed 1
      const value = Math.floor(progress * finalValue); // Calculate current value based on progress
      counterElement.textContent = value + '%';

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }

  const section = document.getElementById('counterSection');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter('happyClients', 3000, 5000); // 5000ms = 5s
        animateSalaryCounter('projectsCompleted', 80, 5000); // 5000ms = 5s
        animateCounter('teamMembers', 50, 5000); // 5000ms = 5s
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(section);
});

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const faq = button.nextElementSibling
    const icon = button.children[1]

    faq.classList.toggle('show')
    icon.classList.toggle('rotate')
  })
})

document.addEventListener('DOMContentLoaded', function () {
  // Get the modal and button elements
  var modal = document.getElementById('myModal')
  var btn = document.getElementById('openModalBtn')
  var btnTwo = document.getElementById('openModalBtntwo')
  var span = document.getElementsByClassName('close')[0]

  // Open the modal when the button is clicked
  btn.addEventListener('click', function () {
    modal.style.display = 'block'
    document.body.classList.add('modal-open')
  })

  btnTwo.addEventListener('click', function () {
    modal.style.display = 'block'
    document.body.classList.add('modal-open')
  })

  // Close the modal when the close button is clicked
  span.addEventListener('click', function () {
    modal.style.display = 'none'
    document.body.classList.remove('modal-open')
  })

  // Close the modal when the user clicks outside of it
  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none'
      document.body.classList.remove('modal-open')
    }
  })
})

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId)

  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

function redirectAfterSubmission() {
  // Perform any form submission processing here

  // Redirect to the thank-you page after a short delay (e.g., 1 second)
  setTimeout(function () {
    window.location.href = 'http://127.0.0.1:5500/thankyou.html'
  }, 1000)

  // Prevent the form from submitting immediately
  return false
}

var swiper = new Swiper('.slide-content', {
  slidesPerView: 3,
  loop: true,
  loopedSlides: 3,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 0,
      loopedSlides: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
      loopedSlides: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
  },
})
var swiper = new Swiper('.programs-content', {
  slidesPerView: 3,
  loop: true,
  loopedSlides: 3,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    240: {
      slidesPerView: 1,
      spaceBetween: 0,
      loopedSlides: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
      loopedSlides: 2,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 4,
    },
  },
})
var swiper = new Swiper(".mySwiperservices", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// const header1 = document.querySelector('.top-header');
// const header2 = document.getElementById('headertwo');

// // Function to handle the scroll event
// function handleScroll() {
//     // Check if the user has scrolled to the bottom of the page
//     const scrollPosition = window.pageYOffset;
//     const totalHeight = document.body.scrollHeight - window.innerHeight;

//     // If the user has scrolled to the bottom, hide the first header
//     if (scrollPosition >= totalHeight) {
//         header1.style.display = 'none';
//         header1.style.visibility = 'hidden';
//     } else {
//         header1.style.display = 'block';
//     }
// }

// Add the scroll event listener
// window.addEventListener('scroll', handleScroll);
const slides = document.querySelectorAll(".carousel__item");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);
