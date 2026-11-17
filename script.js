// ======================================
// KNP PORTFOLIO - JAVASCRIPT
// ======================================


// 1. TYPING ANIMATION

const words = [
    "Python Developer",
    "Computer Science Student",
    "AI Enthusiast",
    "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = deleting ? 50 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}


// PROJECT DATA

const projects = [
    {
        id: "calculator",
        icon: "🧮",
        title: "Python Calculator",
        category: "Python Development",
        description: "A command-line calculator that performs addition, subtraction, multiplication and division. Uses Python match-case statements and exception handling.",
        technologies: ["Python", "Match Case", "Exception Handling"]
    },
    {
        id: "water",
        icon: "💧",
        title: "Drink Water Reminder",
        category: "Python Application",
        description: "A desktop reminder application that encourages users to stay hydrated by sending notifications every hour using the Plyer library.",
        technologies: ["Python", "Plyer", "Time"]
    },
    {
        id: "qr",
        icon: "📱",
        title: "QR Code Generator",
        category: "Python Development",
        description: "Generates QR code images from user-provided URLs and saves them as PNG files.",
        technologies: ["Python", "qrcode", "PNG"]
    },
    {
        id: "quiz",
        icon: "🎯",
        title: "Quiz Game",
        category: "Python Game",
        description: "An interactive general knowledge quiz featuring multiple-choice questions, answer checking and virtual prize amounts.",
        technologies: ["Python", "Conditional Logic"]
    },
   {
    id: "jarvis",
    icon: "🤖",
    title: "Jarvis AI Assistant",
    category: "Artificial Intelligence",
    description: "A personal AI assistant built with Python, Ollama and Llama 3.2. It accepts typed questions, generates AI responses locally and speaks answers using text-to-speech.",
    technologies: ["Python", "Ollama", "Llama 3.2", "pyttsx3"],
    github: "https://github.com/KETKI-P21/Jarvis-AI"
},

        {
    id: "baka",
     icon: "🌐",
    title: "Baka Portfolio",
    category: "Web Development",
    description: "A responsive video editing and animation portfolio website featuring categorized video projects and YouTube embeds.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    github: "https://github.com/KETKI-P21/baka-portfolio",
    demo: "https://bakaportfolio.netlify.app"
}

];



// DISPLAY PROJECT CARDS

function displayProjects() {
    const projectsGrid = document.getElementById("projects-grid");

    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">

            <div class="project-top">
                <div class="project-icon">${project.icon}</div>
                <span class="project-category">${project.category}</span>
            </div>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="tags">
                ${project.technologies.map(tech =>
                    `<span>${tech}</span>`
                ).join("")}
            </div>

            <div class="project-actions">

                <button class="project-button"
                    onclick="showProject('${project.id}')">
                    Explore Project ↗
                </button>

                ${project.demo ? `
                    <a href="${project.demo}"
                       class="project-button"
                       target="_blank"
                       rel="noopener noreferrer">
                       Live Website ↗
                    </a>
                ` : ""}

                ${project.github ? `
                    <a href="${project.github}"
                       class="project-button"
                       target="_blank"
                       rel="noopener noreferrer">
                       GitHub Code ↗
                    </a>
                ` : ""}

            </div>

        </div>
    `).join("");
}

// 4. PROJECT DETAILS MODAL

function showProject(projectId) {
    const project = projects.find(item => item.id === projectId);

    if (!project) return;

    const modal = document.getElementById("project-modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");

    if (!modal || !title || !description) return;

    title.textContent = project.title;
    description.textContent = project.description;

    modal.style.display = "flex";
}


// 5. CLOSE PROJECT MODAL

function closeProject() {
    const modal = document.getElementById("project-modal");

    if (modal) {
        modal.style.display = "none";
    }
}


// Close modal when clicking outside it

window.addEventListener("click", function(event) {
    const modal = document.getElementById("project-modal");

    if (event.target === modal) {
        closeProject();
    }
});


// 6. COPYRIGHT YEAR

function updateFooterYear() {
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


// 7. START EVERYTHING

document.addEventListener("DOMContentLoaded", function() {
    typeEffect();
    displayProjects();
    updateFooterYear();
});

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function() {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function() {

            navLinks.classList.remove("active");
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}