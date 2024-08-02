function showAboutMeProjectsContacts() {
    document.getElementById("aboutMeProjectsContactsMainContainer").style.display = "block";

    setInterval(() => {
        document.getElementById("navigationTop").style.display = "flex";
        document.getElementById("btnToShowAboutMeProjectContactContainer").style.display = "none";
    }, 250);
}

function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
}

const header = document.querySelector('.headerContainer');
const aboutMeContainer = document.querySelector('.shortEssayAboutMySelfContainer');
const projectsContainer = document.querySelector('.projectImg');

function removeUnderlineOnNavBtn() {
    document.getElementById("aboutBtn").style.borderBottom = "none";
    document.getElementById("aboutBtn").style.transform = "translateY(0px)"
    document.getElementById("projectsBtn").style.borderBottom = "none";
    document.getElementById("projectsBtn").style.transform = "translateY(0px)";
}
function underlinedABoutNavBtn() {
    document.getElementById("aboutBtn").style.borderBottom = "none";
    document.getElementById("aboutBtn").style.transform = "none"
    document.getElementById("projectsBtn").style.borderBottom = "3px solid #f8f9fa";
    document.getElementById("projectsBtn").style.transform = "translateY(-5px)";
}
function underlinedProjectsNavBtn() {
    document.getElementById("aboutBtn").style.borderBottom = "3px solid #f8f9fa";
    document.getElementById("aboutBtn").style.transform = "translateY(-5px)"
    document.getElementById("projectsBtn").style.borderBottom = "none";
    document.getElementById("projectsBtn").style.transform = "none";
}

document.addEventListener('scroll', () => {
    if (isVisible(aboutMeContainer) == true) {
        underlinedProjectsNavBtn();
    }else if (isVisible(projectsContainer) == true) {
        underlinedABoutNavBtn();
    }else {
        removeUnderlineOnNavBtn();
    }
});