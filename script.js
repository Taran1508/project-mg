document.addEventListener('DOMContentLoaded', () => {
    // Add Education
    document.getElementById('add-education-btn').addEventListener('click', () => {
        addRecord('education-template', 'education-container');
    });

    document.getElementById('remove-education-btn').addEventListener('click', () => {
        removeAllRecords('education-container');
    });

    // Add Projects
    document.getElementById('add-project-btn').addEventListener('click', () => {
        addRecord('project-template', 'project-container');
    });

    document.getElementById('remove-project-btn').addEventListener('click', () => {
        removeAllRecords('project-container');
    });

    // Add Work Experience
    document.getElementById('add-work-btn').addEventListener('click', () => {
        addRecord('work-template', 'work-container');
    });

    document.getElementById('remove-work-btn').addEventListener('click', () => {
        removeAllRecords('work-container');
    });

    // Add Skills
    document.getElementById('add-skill-btn').addEventListener('click', () => {
        addRecord('skills-template', 'skills-container');
    });

    document.getElementById('remove-skill-btn').addEventListener('click', () => {
        removeAllRecords('skills-container');
    });

    // Add Extracurricular Activities
    document.getElementById('add-activity-btn').addEventListener('click', () => {
        addRecord('activity-template', 'activities-container');
    });

    document.getElementById('remove-activity-btn').addEventListener('click', () => {
        removeAllRecords('activities-container');
    });

    // Add Achievements
    document.getElementById('add-achievement-btn').addEventListener('click', () => {
        addRecord('achievement-template', 'achievements-container');
    });

    document.getElementById('remove-achievement-btn').addEventListener('click', () => {
        removeAllRecords('achievements-container');
    });

    // Add Social Media Links
    document.getElementById('add-social-media-btn').addEventListener('click', () => {
        addRecord('social-media-template', 'social-media-container');
    });

    document.getElementById('remove-social-media-btn').addEventListener('click', () => {
        removeAllRecords('social-media-container');
    });

    function addRecord(templateId, containerId) {
        const template = document.getElementById(templateId);
        const container = document.getElementById(containerId);
        const clone = template.cloneNode(true);
        clone.classList.remove(template.classList[0]); // Remove record class
        container.appendChild(clone);
    }

    function removeAllRecords(containerId) {
        const container = document.getElementById(containerId);
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }
});
