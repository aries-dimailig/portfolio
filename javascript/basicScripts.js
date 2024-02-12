function showAboutMeProjectsContacts() {
    document.getElementById("aboutMeProjectsContactsMainContainer").style.display = "block";
    // setTimeout(() => {
    //     document.getElementById("btnToShowAboutMeProjectContactContainer").style.display = "none";
    // }, 1500);

    setInterval(() => {
        document.getElementById("navigationTop").style.display = "flex";
        document.getElementById("btnToShowAboutMeProjectContactContainer").style.display = "none";
    }, 250);
}