export function createExperienceSection(rootElement) {
    const section = document.createElement('section')
    section.id = 'experience'
    section.innerHTML = `
        <h1 class="title">Tech Stack</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container">
                    <h2 class="experience-sub-title">Languages & Frameworks</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/technologies/Python.png" alt="Python icon" class="icon"/>
                            <div><h3>Python</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/Flask.png" alt="Flask icon" class="icon"/>
                            <div><h3>Flask</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/JavaScript.png" alt="JavaScript icon" class="icon"/>
                            <div><h3>JavaScript</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/ReactJS.png" alt="ReactJS icon" class="icon"/>
                            <div><h3>ReactJS</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/NodeJS.png" alt="NodeJS icon" class="icon"/>
                            <div><h3>Node.js</h3></div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Databases & Data</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/technologies/PostgreSQL.svg" alt="PostgreSQL icon" class="icon"/>
                            <div><h3>PostgreSQL</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/SQL.png" alt="SQL icon" class="icon"/>
                            <div><h3>SQL</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/MongoDB.png" alt="MongoDB icon" class="icon"/>
                            <div><h3>MongoDB</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/Redis.png" alt="Redis icon" class="icon"/>
                            <div><h3>Redis</h3></div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Infrastructure & DevOps</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/technologies/Docker.png" alt="Docker icon" class="icon"/>
                            <div><h3>Docker</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/Azure.png" alt="Azure icon" class="icon"/>
                            <div><h3>Azure</h3></div>
                        </article>
                        <article>
                            <img src="./assets/icons/github.png" alt="GitHub icon" class="icon"/>
                            <div><h3>GitHub Actions</h3></div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Core Concepts</h2>
                    <div class="article-container">
                        <article>
                            <div><h3>CI/CD</h3></div>
                        </article>
                        <article>
                            <div><h3>Encryption</h3></div>
                        </article>
                        <article>
                            <div><h3>Threading</h3></div>
                        </article>
                        <article>
                            <div><h3>Async Processing</h3></div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <img src="./assets/icons/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#projects'" />
    `

    rootElement.appendChild(section)
}
