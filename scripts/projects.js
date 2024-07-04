export function createProjectsSection(rootElement) {
    const section = document.createElement('section')
    section.id = 'projects'
    section.innerHTML = `
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/ProjectManager.png" alt="Personal Project Manager" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">Personal Project Manager</h2>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe/MERN-project-list'">
                            Github
                        </button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/SymptomWithdrawalMonitor.jpg" alt="Withdrawal Monitor" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">Medical Withdrawal Monitor</h2>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe/withdrawal-monitor'">
                            Github
                        </button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/AutonomousRoboticMapper.jpg" alt="Autonomous Robotic Mapper" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">Autonomous Robotic Mapper</h2>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe/LiDAR-based-3D-Mapping-project'">
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <img src="./assets/icons/arrow.png" alt="Arrow icon" class="icon arrow" onclick="location.href='./#contact'" />
    `
    rootElement.appendChild(section)
}
