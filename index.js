// Import functions from separate modules
import { createNav } from './scripts/nav.js';
import { createProfileSection } from './scripts/profile.js';
import { createAboutSection } from './scripts/about.js';
import { createExperienceSection } from './scripts/experience.js';
import { createProjectsSection } from './scripts/projects.js';
import { createContactSection } from './scripts/contact.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    // Check if root element is found
    if (!root) {
        console.error("Root element '#root' not found.");
        return;
    }

    // Create navigation bar
    createNav(root);

    // Create sections
    createProfileSection(root);
    createAboutSection(root);
    createExperienceSection(root);
    createProjectsSection(root);
    createContactSection(root);
});
