export function createExperienceSection(rootElement) {
    const section = document.createElement('section')
    section.id = 'experience'
    section.innerHTML = `
        <h1 class="title">Tech Stack</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container">
                    <h2 class="experience-sub-title">Frontend</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/technologies/JavaScript.png" alt="JavaScript icon" class="icon"/>
                            <div><h3>JavaScript</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/TypeScript.png" alt="TypeScript icon" class="icon"/>
                            <div><h3>TypeScript</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/ReactJS.png" alt="ReactJS icon" class="icon"/>
                            <div><h3>ReactJS</h3></div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Backend</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/technologies/Python.png" alt="Python icon" class="icon"/>
                            <div><h3>Python</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/NodeJS.png" alt="NodeJS icon" class="icon"/>
                            <div><h3>NodeJS</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/ExpressJS.png" alt="ExpressJS icon" class="icon"/>
                            <div><h3>ExpressJS</h3></div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Databases</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/technologies/MongoDB.png" alt="MongoDB icon" class="icon"/>
                            <div><h3>MongoDB</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/SQL.png" alt="SQL icon" class="icon"/>
                            <div><h3>SQL</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/PostgreSQL.png" alt="PostgreSQL icon" class="icon"/>
                            <div><h3>PostgreSQL</h3></div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">Dev Tools</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/icons/github.png" alt="GitHub icon" class="icon"/>
                            <div><h3>GitHub</h3></div>
                        </article>
                        <article>
                            <img src="./assets/technologies/postman.png" alt="Postman icon" class="icon"/>
                            <div><h3>Postman</h3></div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <img src="./assets/icons/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#projects'" />
    `

    rootElement.appendChild(section)
}
