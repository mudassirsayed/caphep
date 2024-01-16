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
  function animateCounter(elementId, finalValue) {
    let currentCount = 0
    const counterElement = document.getElementById(elementId)

    function updateCounter() {
      counterElement.textContent = currentCount + '+'
      currentCount++

      if (currentCount <= finalValue) {
        requestAnimationFrame(updateCounter)
      }
    }

    updateCounter()
  }

  const section = document.getElementById('counterSection')
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter('happyClients', 150)
        animateCounter('projectsCompleted', 120)
        animateCounter('teamMembers', 35)
        observer.unobserve(entry.target)
      }
    })
  }, options)

  observer.observe(section)
})

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
  var span = document.getElementsByClassName('close')[0]

  // Open the modal when the button is clicked
  btn.addEventListener('click', function () {
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
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
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
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
})
