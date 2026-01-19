export function createProjectsSection(rootElement) {
    const section = document.createElement('section')
    section.id = 'projects'
    section.innerHTML = `
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/LunarLander.png" alt="Lunar Landing Hackathon" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">🏆 Lunar Landing RL Hackathon</h2>
                    <p class="project-desc"><strong>1st Place Winner</strong> - Deep Q-Networks using PyTorch with 285.3 reward score, outperforming 50+ teams</p>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/rabiut/RL_Hackathon'">
                            Github
                        </button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/ChromeExtension.png" alt="Intelligent Email Sorting ML" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">Intelligent Email Sorting ML Application</h2>
                    <p class="project-desc">Machine learning pipeline with spaCy and NLTK achieving 90% classification accuracy. Real-time email processing with GDPR-compliant optimizations and extensive API testing</p>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe/nextmove-capstone'">
                            Github
                        </button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/AutonomousRoboticMapper.jpg" alt="Embedded LiDAR Mapping" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">Embedded LiDAR Mapping Interface</h2>
                    <p class="project-desc">Low-level embedded system using I2C and UART communication for micro-controller sensor integration. Developed Python-based visualization tool for 3D scatter plots of LiDAR data</p>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe/LiDAR-based-3D-Mapping-project'">
                            Github
                        </button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/PseudoGate.png" alt="PseudoGate Protocol" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">AI Logic Blueprint Generator</h2>
                    <p class="project-desc">Intelligent code architecture tool that translates natural language intent into structured logical blueprints. Acts as a "Logic Architect" to bridge developer intent and implementation, maintaining variable consistency and algorithmic clarity</p>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe'">
                            Github
                        </button>
                    </div>
                </div>
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="./assets/projects/ProjectManage.png" alt="Personal Project Manager" class="project-img"/>
                    </div>
                    <h2 class="experience-sub-title project-title">Personal Project Manager</h2>
                    <p class="project-desc">Full-stack MERN application for managing projects and tasks with a responsive UI</p>
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
                    <p class="project-desc">Python-based diagnostic tool for monitoring withdrawal symptoms with real-time health insights</p>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn" onclick="location.href='https://github.com/yashexe/withdrawal-monitor'">
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
