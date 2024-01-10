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
