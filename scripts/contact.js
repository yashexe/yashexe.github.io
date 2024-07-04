export function createContactSection(rootElement) {
    const section = document.createElement('section');
    section.id = 'contact';
    section.innerHTML = `
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
            <div class="contact-info-container">
                <img src="./assets/icons/email.png" alt="Email icon" class="icon contact-icon email-icon" />
                <p><a href="mailto:yashbhavsar3602@gmail.com">yashbhavsar3602@gmail.com</a></p>
            </div>
            <div class="contact-info-container">
                <img src="./assets/icons/linkedin.png" alt="LinkedIn icon" class="icon contact-icon" />
                <p><a href="https://www.linkedin.com/in/yash-bhav">LinkedIn</a></p>
            </div>
        </div>
    `;

    rootElement.appendChild(section);
}
