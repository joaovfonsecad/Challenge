var mainButton = document.getElementById("main");
var chatsButton = document.getElementById("chats");
var eventosButton = document.getElementById("eventos");

function clearButtons() {
    if(chatsButton.classList.contains("active_button")) {
        chatsButton.classList.remove("active_button");
    }
    if(eventosButton.classList.contains("active_button")) {
        eventosButton.classList.remove("active_button");
    }
    if(mainButton.classList.contains("active_button")) {
        mainButton.classList.remove("active_button");
    }
}

function addColorButtons() {
    if(window.location.pathname == '/index.html') {
        mainButton.classList.add("active_button");
    }
    if (window.location.pathname == '/chats.html') {
        chatsButton.classList.add("active_button");
    }
    if (window.location.pathname == '/eventos.html') {
        eventosButton.classList.add("active_button");
    }
}

function buttonFooter() {
    clearButtons();
    addColorButtons();
}

buttonFooter();