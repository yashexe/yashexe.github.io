function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
document.addEventListener('DOMContentLoaded', () => {
const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 75,
    deleteSpeed: 25,
});

typewriter
    .typeString('Software Engineer')
    .pauseFor(1000)
    .deleteAll()
    .typeString('B.Sc Electrical Engineering')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Blogger')
    .pauseFor(1000)
    .start();
});