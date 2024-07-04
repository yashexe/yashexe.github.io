export function createProfileSection(rootElement) {
    const section = document.createElement('section');
    section.id = 'profile';
    section.innerHTML = `
        <div class="section__pic-container">
            <img class="main-pic" src="./assets/personal/YashBhavsar.jpeg" alt="Yash Bhavsar profile picture" />
        </div>
        <div class="section__text">
            <h1 class="title">Yash Bhavsar</h1>
            <div class="section__text__p2">
                <span id="typewriter"></span>
            </div>
            <div class="btn-container">
                <button class="btn btn-color-1" onclick="window.open('./assets/personal/Yash Bhavsar Resume.pdf')">
                    Download Resume
                </button>
            </div>
            <div id="socials-container">
                <img src="./assets/icons/linkedin.png" alt="My LinkedIn profile" class="icon" onclick="location.href='https://www.linkedin.com/in/yash-bhav'" />
                <img src="./assets/icons/github.png" alt="My Github profile" class="icon" onclick="location.href='https://github.com/yashexe'" />
            </div>
        </div>
    `;

    rootElement.appendChild(section);

    // Typewriter effect implementation
    const typewriterText = ['Software Engineer', 'B.Sc Electrical Engineering', 'Blogger']
    const typewriterSpan = document.getElementById('typewriter');
    let charIndex = 0, textIndex = 0, isDeleting = false;

    function type() {
        const currentText = typewriterText[textIndex];
        
        typewriterSpan.textContent = isDeleting ? currentText.substring(0, --charIndex) : currentText.substring(0, ++charIndex);

        if (charIndex === currentText.length + 1)  isDeleting = true;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typewriterText.length;
        }

        setTimeout(type, isDeleting ? 50 : 75);
    }
    type();
}
