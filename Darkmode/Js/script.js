const changeThemeBtn = document.querySelector("#change-theme")

// toggle darkmode
function toggledarkmode() {
    document.body.classList.toggle("dark");
}

// load light or dark mode
function loadTheme() {
    const darkmode = localStorage.getItem("dark")

    if(darkmode){
        toggledarkmode()
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
    toggledarkmode();

    // save or remove darkmode
    localStorage.removeItem("dark")

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})