// Define toggleMenu globally or in a scope accessible to event listeners
function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
  
// Adjust createNav function to use event listeners correctly
export function createNav(rootElement) {
    const navDesktop = document.createElement('nav');
    navDesktop.id = 'desktop-nav';
    navDesktop.innerHTML = `
        <div class="logo">Yash Bhavsar</div>
        <div>
            <ul class="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Tech Stack</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    `;

    const navHamburger = document.createElement('nav');
    navHamburger.id = 'hamburger-nav';
    navHamburger.innerHTML = `
        <div class="logo">Yash Bhavsar</div>
        <div class="hamburger-menu">
            <div class="hamburger-icon" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menu-links">
                <ul>
                    <li><a href="#about" onclick="toggleMenu()">About</a></li>
                    <li><a href="#experience" onclick="toggleMenu()">Tech Stack</a></li>
                    <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
                    <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
                </ul>
            </div>
        </div>
    `;

    rootElement.appendChild(navDesktop)
    rootElement.appendChild(navHamburger)

    // Add event listener for the hamburger icon
    const hamburgerMenu = navHamburger.querySelector('.hamburger-menu')
    hamburgerMenu.addEventListener('click', (event) => {
        if (event.target.closest('.hamburger-icon') || event.target.closest('.menu-links a'))
            toggleMenu()
    });
}