// Hero Section
document.getElementById("name").textContent = profile.name;

// Animated roles
let index = 0;
function rotateRoles() {
    document.getElementById("roles").textContent = profile.roles[index];
    index = (index + 1) % profile.roles.length;
}
rotateRoles();
setInterval(rotateRoles, 2000);

// Skills
const skillsDiv = document.getElementById("skills");
profile.skills.forEach(skill => {
    skillsDiv.innerHTML += `<div class="card">${skill}</div>`;
});

// Projects
const projectsDiv = document.getElementById("projects");
profile.projects.forEach(p => {
    projectsDiv.innerHTML += `
        <div class="card">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
        </div>`;
});

// Experience
const expDiv = document.getElementById("experience");
profile.experience.forEach(e => {
    expDiv.innerHTML += `<p>• ${e}</p>`;
});