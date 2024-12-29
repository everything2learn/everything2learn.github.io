// JavaScript for section transitions
function changeSectionByType(sectionType) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionType);
    selectedSection.style.display = 'block';
    
    // Scroll to the section (no page jump)
    window.scrollTo({
        top: selectedSection.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Set the default landing page section to be visible
document.addEventListener('DOMContentLoaded', () => {
    // By default, show the About section
    changeSectionByType('about');
});

// Word Change Animation
const words = ['Responsive', 'Innovative', 'Creative'];
let wordIndex = 0;
const animatedWordElement = document.getElementById('animated-word');

// Function to change the word dynamically
function changeWord() {
    animatedWordElement.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length; // Loop through words array
}

// Start the word cycling every 3 seconds
setInterval(changeWord, 3000);  // Change word every 3 seconds
