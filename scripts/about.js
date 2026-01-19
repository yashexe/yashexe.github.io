export function createAboutSection(rootElement) {
    const section = document.createElement('section')
    section.id = 'about'
    section.innerHTML = `
        <h1 class="title">About Me</h1>
        <div class="section-container">
            <div class="section__pic-container">
                <img src="./assets/personal/NYSunset.jpg" alt="Profile picture" class="NYSunset" />
            </div>
            <div class="about-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <img src="./assets/icons/experience.png" alt="Experience icon" class="icon" />
                        <h3>Current Role</h3>
                        <p>Software Engineer @ Finaptive</p>
                    </div>
                    <div class="details-container">
                        <img src="./assets/icons/education.png" alt="Education icon" class="icon" />
                        <h3>Education</h3>
                        <p>B.S. Electrical Engineering @ McMaster University</p>
                    </div>
                </div>
                <div class="text-container">
                    <p>
                        I'm a Software Engineer with a passion for building scalable systems and solving complex problems. Currently at Finaptive, I engineer production-grade financial platforms. I thrive in collaborative environments, combining deep technical expertise with a commitment to clean code, security, and high-performance systems. I'm driven by challenges that require architectural thinking and continuous learning.
                    </p>
                </div>
            </div>
        </div>
        <img src="./assets/icons/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#experience'" />
    `
    rootElement.appendChild(section)
}

