function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

const header = document.querySelector('.name');
const aboutMeContainer = document.querySelector('.shortEssayAboutMySelfContainer');
const projectsContainer = document.querySelector('.projectImg');

document.addEventListener('scroll', () => {
    if (isVisible(header) == false) {
        document.getElementById("aboutBtn").style.borderBottom = "none";
        document.getElementById("aboutBtn").style.transform = "none"
        document.getElementById("projectsBtn").style.borderBottom = "none";
        document.getElementById("projectsBtn").style.transform = "none";
    }
    if (isVisible(aboutMeContainer) == false) {
        // document.getElementById("aboutBtn").style.borderBottom = "none";
        // document.getElementById("aboutBtn").style.transform = "none"
        document.getElementById("projectsBtn").style.borderBottom = "3px solid #f8f9fa";
        document.getElementById("projectsBtn").style.transform = "translateY(-5px)";
    }
    if (isVisible(projectsContainer) == false) {
        document.getElementById("aboutBtn").style.borderBottom = "3px solid #f8f9fa";
        document.getElementById("aboutBtn").style.transform = "translateY(-5px)"
        // document.getElementById("projectsBtn").style.borderBottom = "none";
        // document.getElementById("projectsBtn").style.transform = "none";
    }
});