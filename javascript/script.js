var jobberButton = document.getElementById("jobber");
var chatsButton = document.getElementById("chats");
var eventosButton = document.getElementById("eventos");
var mainButton = document.getElementById("main");

var info = document.getElementById("info");
var infoButton = document.getElementById("info_button");

function clearButtons() {
    if(mainButton.classList.contains("active_button")) {
        mainButton.classList.remove("active_button");
    }
    if(jobberButton.classList.contains("active_button")) {
        jobberButton.classList.remove("active_button");
    }
    if(chatsButton.classList.contains("active_button")) {
        chatsButton.classList.remove("active_button");
    }
    if(eventosButton.classList.contains("active_button")) {
        eventosButton.classList.remove("active_button");
    }
}

function addColorButtons() {
    if(window.location.pathname == '/main.html') {
        mainButton.classList.add("active_button");
    }
    if (window.location.pathname == '/jobber.html') {
        jobberButton.classList.add("active_button");
    }
    if (window.location.pathname == '/chats.html') {
        chatsButton.classList.add("active_button");
    }
    if (window.location.pathname == '/eventos.html') {
        eventosButton.classList.add("active_button");
    }
    if(window.location.pathname == '/Challenge/main.html') {
        mainButton.classList.add("active_button");
    }
    if(window.location.pathname == '/Challenge/jobber.html') {
        jobberButton.classList.add("active_button");
    }
    if (window.location.pathname == '/Challenge/chats.html') {
        chatsButton.classList.add("active_button");
    }
    if (window.location.pathname == '/Challenge/eventos.html') {
        eventosButton.classList.add("active_button");
    }
}

function buttonFooter() {
    clearButtons();
    addColorButtons();
}

buttonFooter();

function openCloseInfo() {
    if (info.classList.contains("info_closed")) {
        info.classList.remove("info_closed");
        infoButton.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }
    else {
        info.classList.add("info_closed");
        infoButton.innerHTML = '<i class="fa-solid fa-info"></i>'
    }
}