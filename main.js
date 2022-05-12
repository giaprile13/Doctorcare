window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2



  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight  

  const sectionTopReachOrPassedTargetLine =  targetLine >= sectionTop

  console.log('O topo da seção chegou ou ultrapassou a linha?', sectionTopReachOrPassedTargetLine)


  const sectionEndsAt = sectionTop + sectionHeight
 

  const sectionEndPassedTargertLine = sectionEndsAt <= targetLine

  console.log('O topo da seção chegou ou passou da linha?', sectionEndPassedTargertLine)



  const sectionBoundaries = 
  sectionTopReachOrPassedTargetLine && !sectionEndPassedTargertLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')

  }

}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')   
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')   
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  dsitance: '30px',
  duration: 700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);

