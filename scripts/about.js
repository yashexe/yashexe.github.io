export function createAboutSection(rootElement) {
    const section = document.createElement('section');
    section.id = 'about';
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
                        <h3>Recent Work Experience</h3>
                        <p>Software Engineer Intern @ AMD</p>
                    </div>
                    <div class="details-container">
                        <img src="./assets/icons/education.png" alt="Education icon" class="icon" />
                        <h3>Education</h3>
                        <p>B.Sc. Electrical Engineering @ McMaster University</p>
                    </div>
                </div>
                <div class="text-container">
                    <p>
                        I'm a world-renowned Software Engineer and the one who solved climate change... someday. While I'm not quite at that level yet, I'm someone who is consistent, never stays down, enjoys what I do, and is honest with myself. I think that's worth betting on!
                    </p>
                </div>
            </div>
        </div>
        <img src="./assets/icons/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#experience'" />
    `;

    rootElement.appendChild(section);
}

