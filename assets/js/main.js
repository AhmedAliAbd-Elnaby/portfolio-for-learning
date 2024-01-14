/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
//-------------- CANVAS OBJECT --------------//


// Canvas
const canvas = document.getElementById("js-bg-animation");
const ctx = canvas.getContext("2d");
ctx.globalCompositeOperation = "lighter";
canvas.width = window.innerWidth;
console.log(canvas.width);
canvas.height = window.innerHeight;

function generateRandomGradient() {
    dimension = Math.random() * 200;
  return {
    x: Math.abs(Math.random() * canvas.width - dimension),
    y: Math.random() * canvas.height,
    blue: Math.random() * 255,
    red: Math.random() * 80,
    green: Math.random() * 80,
    dimension: dimension,
    speedX: (Math.random() - 0.5) * 2, // Random horizontal speed
    speedY: (Math.random() - 0.5) * 2 // Random vertical speed
  };
}

const gradients = [];
// Create initial gradients
for (let i = 0; i < 20; i++) {
  gradients.push(generateRandomGradient());
}

//-------------- ANIMATION PING PONG SQUARES --------------//

function animation() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const gradient of gradients) {
    gradient.x += gradient.speedX;
    gradient.y += gradient.speedY;

    if (gradient.x < 0) {
      gradient.speedX *= -1;
    }
    
     if (gradient.x > canvas.width - (gradient.dimension)) {
      gradient.speedX *= -1;
    }

    if (gradient.y < 0 || gradient.y > canvas.height) {
      gradient.speedY *= -1;
    }

    // const color = colors[Math.floor(Math.random() * 3)]

    // ctx.fillStyle = color;

    ctx.fillRect(
      gradient.x,
      gradient.y,
      gradient.dimension,
      gradient.dimension
    ); // Adjust size as needed
  }
  requestAnimationFrame(animation);
}

animation();

// Handle window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
